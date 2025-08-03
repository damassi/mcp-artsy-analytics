import * as z from "zod"
import { graphql, fetchQuery } from "relay-runtime"
import type { Environment } from "relay-runtime"
import type { inquiriesStatsToolQuery } from "z__generated__/inquiriesStatsToolQuery.graphql.js"

export interface InquiriesStatsArgs {
  partnerId: string
  period?: "FOUR_WEEKS" | "SIXTEEN_WEEKS" | "ONE_YEAR"
}

export const inquiriesStatsTool = (relayEnvironment: Environment) => {
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
        const data = await fetchQuery<inquiriesStatsToolQuery>(
          relayEnvironment,
          graphql`
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
          `,
          { partnerId, period }
        ).toPromise()

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
