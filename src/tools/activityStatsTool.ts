import * as z from "zod"
import { gql } from "@urql/core"
import { executeQuery } from "utils/graphql"
import { ActivityStatsToolQuery } from "generated/graphql"

export interface ActivityStatsArgs {
  partnerId: string
  period?: "FOUR_WEEKS" | "SIXTEEN_WEEKS" | "ONE_YEAR"
}

export const activityStatsTool = () => {
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
        const query = gql`
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
        `

        const data = await executeQuery<ActivityStatsToolQuery>(query, {
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
