import * as z from "zod"
import { executeQuery } from "../utils/graphql"
import { gql } from "@urql/core"
import { SalesStatsToolQuery } from "generated/graphql"

export interface SalesStatsArgs {
  partnerId: string
  period?: "FOUR_WEEKS" | "SIXTEEN_WEEKS" | "ONE_YEAR"
}

export const salesStatsTool = () => {
  return {
    name: "get_partner_sales_stats",
    description:
      "Get partner sales analytics including order count, revenue, and response times",
    inputSchema: {
      partnerId: z.string().describe("Partner ID to get sales analytics for"),
      period: z
        .enum(["FOUR_WEEKS", "SIXTEEN_WEEKS", "ONE_YEAR"])
        .optional()
        .default("FOUR_WEEKS")
        .describe("Time period for sales data"),
    },
    handler: async ({ partnerId, period = "FOUR_WEEKS" }: SalesStatsArgs) => {
      try {
        const query = gql`
          query salesStatsToolQuery(
            $partnerId: String!
            $period: AnalyticsQueryPeriodEnum!
          ) {
            partner(id: $partnerId) {
              name
              analytics {
                sales(period: $period) {
                  orderCount
                  orderResponseTime
                  totalCents
                  total
                  timeSeries(cumulative: true) {
                    startTime
                    endTime
                    count: totalCents
                    countDisplay: total
                  }
                }
              }
            }
          }
        `

        const data = await executeQuery<SalesStatsToolQuery>(query, {
          partnerId,
          period,
        })

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  partner: data.partner?.name,
                  period,
                  sales: data.partner?.analytics?.sales,
                },
                null,
                2
              ),
            },
          ],
        }
      } catch (error) {
        return {
          content: [
            {
              type: "text",
              text: `Error fetching sales stats: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        }
      }
    },
  }
}
