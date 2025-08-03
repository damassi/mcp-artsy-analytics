import { graphql, fetchQuery } from "relay-runtime"
import type { Environment } from "relay-runtime"
import * as z from "zod"
import { activityStatsToolQuery } from "z__generated__/activityStatsToolQuery.graphql"
export interface ActivityStatsArgs {
  partnerId: string
  period?: "FOUR_WEEKS" | "SIXTEEN_WEEKS" | "ONE_YEAR"
}

export const activityStatsTool = (relayEnvironment: Environment) => {
  return {
    name: "get_partner_activity_stats",
    description:
      "Get partner activity analytics including pageviews, artwork views, and unique visitors",
    inputSchema: {
      partnerId: z.string().describe("Partner ID to get analytics for"),
      period: z
        .enum(["FOUR_WEEKS", "SIXTEEN_WEEKS", "ONE_YEAR"])
        .optional()
        .default("FOUR_WEEKS")
        .describe("Time period for analytics data"),
    },
    handler: async ({
      partnerId,
      period = "FOUR_WEEKS",
    }: ActivityStatsArgs) => {
      try {
        const data = await fetchQuery<activityStatsToolQuery>(
          relayEnvironment,
          graphql`
            query activityStatsToolQuery(
              $partnerId: String!
              $period: AnalyticsQueryPeriodEnum!
            ) {
              partner(id: $partnerId) {
                name
                analytics {
                  pageviews(period: $period) {
                    totalCount
                    percentageChanged
                    artworkViews
                    galleryViews
                    showViews
                    uniqueVisitors
                    timeSeries {
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
                  activity: data.partner?.analytics?.pageviews,
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
              text: `Error fetching activity stats: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        }
      }
    },
  }
}
