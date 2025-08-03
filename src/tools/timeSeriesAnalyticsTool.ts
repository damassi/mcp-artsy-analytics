import * as z from "zod"
import { gql } from "@urql/core"
import { executeQuery } from "utils/graphql"

export interface TimeSeriesAnalyticsArgs {
  partnerId: string
  period?: "FOUR_WEEKS" | "SIXTEEN_WEEKS" | "ONE_YEAR"
  metric?: "pageviews" | "artworkPublished"
  cumulative?: boolean
}

export const timeSeriesAnalyticsTool = () => {
  return {
    name: "get_partner_time_series_analytics",
    description:
      "Get time series data for partner analytics with optional cumulative view",
    inputSchema: {
      partnerId: z
        .string()
        .describe("Partner ID to get time series analytics for"),
      period: z
        .enum(["FOUR_WEEKS", "SIXTEEN_WEEKS", "ONE_YEAR"])
        .optional()
        .default("FOUR_WEEKS")
        .describe("Time period for time series data"),
      metric: z
        .enum(["pageviews", "artworkPublished"])
        .optional()
        .default("pageviews")
        .describe("Metric to retrieve time series for"),
      cumulative: z
        .boolean()
        .optional()
        .default(false)
        .describe("Whether to show cumulative data over time"),
    },
    handler: async ({
      partnerId,
      period = "FOUR_WEEKS",
      metric = "pageviews",
      cumulative = false,
    }: TimeSeriesAnalyticsArgs) => {
      try {
        const query = gql`
          query timeSeriesAnalyticsQuery(
            $partnerId: String!
            $period: AnalyticsQueryPeriodEnum!
            $cumulative: Boolean
          ) {
            partner(id: $partnerId) {
              name
              analytics {
                ${
                  metric === "pageviews"
                    ? `
                pageview(period: $period) {
                  totalCount
                  percentageChanged
                  artworkViews
                  galleryViews
                  showViews
                  uniqueVisitors
                  timeSeries(cumulative: $cumulative) {
                    count
                    startTime
                    endTime
                  }
                }
                `
                    : `
                artworkPublished(period: $period) {
                  totalCount
                  percentageChanged
                  timeSeries(cumulative: $cumulative) {
                    count
                    startTime
                    endTime
                  }
                }
                `
                }
              }
            }
          }
        `

        const data = await executeQuery<{
          partner?: { name?: string | null; analytics?: any }
        }>(query, { partnerId, period, cumulative })
        const analyticsData =
          data.partner?.analytics?.[
            metric === "pageviews" ? "pageview" : "artworkPublished"
          ]

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  partner: data.partner?.name,
                  period,
                  metric,
                  cumulative,
                  summary: {
                    totalCount: analyticsData?.totalCount,
                    percentageChanged: analyticsData?.percentageChanged,
                    ...(metric === "pageviews" && {
                      artworkViews: analyticsData?.artworkViews,
                      galleryViews: analyticsData?.galleryViews,
                      showViews: analyticsData?.showViews,
                      uniqueVisitors: analyticsData?.uniqueVisitors,
                    }),
                  },
                  timeSeries: analyticsData?.timeSeries || [],
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
              text: `Error fetching time series analytics: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        }
      }
    },
  }
}
