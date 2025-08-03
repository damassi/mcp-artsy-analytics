import * as z from "zod"
import { gql } from "@urql/core"
import { InquiriesStatsToolQuery } from "generated/graphql"
import { executeQuery } from "utils/graphql"

export interface InquiriesStatsArgs {
  partnerId: string
  period?: "FOUR_WEEKS" | "SIXTEEN_WEEKS" | "ONE_YEAR"
}

export const inquiriesStatsTool = () => {
  return {
    name: "get_partner_inquiries_stats",
    description:
      "Get partner inquiry analytics including inquiry count and response times",
    inputSchema: {
      partnerId: z.string().describe("Partner ID to get inquiry analytics for"),
      period: z
        .enum(["FOUR_WEEKS", "SIXTEEN_WEEKS", "ONE_YEAR"])
        .optional()
        .default("FOUR_WEEKS")
        .describe("Time period for inquiry data"),
    },
    handler: async ({
      partnerId,
      period = "FOUR_WEEKS",
    }: InquiriesStatsArgs) => {
      try {
        const query = gql`
          query inquiriesStatsToolQuery(
            $partnerId: String!
            $period: AnalyticsQueryPeriodEnum!
          ) {
            partner(id: $partnerId) {
              name
              analytics {
                inquiry(period: $period) {
                  inquiryCount
                  inquiryResponseTime
                  timeSeries(cumulative: false) {
                    count
                    startTime
                    endTime
                  }
                }
              }
            }
          }
        `

        const data = await executeQuery<InquiriesStatsToolQuery>(query, {
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
                  inquiries: data.partner?.analytics?.inquiry,
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
              text: `Error fetching inquiries stats: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        }
      }
    },
  }
}
