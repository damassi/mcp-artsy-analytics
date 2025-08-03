import * as z from "zod"

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
        const query = `
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

        const response = await fetch(process.env.METAPHYSICS_ENDPOINT!, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-USER-ID": process.env.USER_ID!,
            "X-ACCESS-TOKEN": process.env.X_ACCESS_TOKEN!,
            "X-TIMEZONE": Intl.DateTimeFormat().resolvedOptions().timeZone,
            "X-CMS-Request": "true",
          },
          body: JSON.stringify({
            query,
            variables: { partnerId, period },
          }),
        })

        const data = await response.json()

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  partner: data.data?.partner?.name,
                  period,
                  activity: data.data?.partner?.analytics?.pageviews,
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
