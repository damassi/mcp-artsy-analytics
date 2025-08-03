import * as z from "zod"
import { gql } from "@urql/core"
import { executeQuery } from "utils/graphql"

export interface ModernPageviewsArgs {
  partnerId: string
  period?: "FOUR_WEEKS" | "SIXTEEN_WEEKS" | "ONE_YEAR"
  includeTimeSeries?: boolean
  cumulative?: boolean
}

export const modernPageviewsTool = () => {
  return {
    name: "get_partner_modern_pageviews",
    description:
      "Get detailed pageview analytics using the modern pageview schema with time series support",
    inputSchema: {
      partnerId: z
        .string()
        .describe("Partner ID to get modern pageview analytics for"),
      period: z
        .enum(["FOUR_WEEKS", "SIXTEEN_WEEKS", "ONE_YEAR"])
        .optional()
        .default("FOUR_WEEKS")
        .describe("Time period for pageview data"),
      includeTimeSeries: z
        .boolean()
        .optional()
        .default(true)
        .describe("Whether to include time series data"),
      cumulative: z
        .boolean()
        .optional()
        .default(false)
        .describe("Whether time series should be cumulative"),
    },
    handler: async ({
      partnerId,
      period = "FOUR_WEEKS",
      includeTimeSeries = true,
      cumulative = false,
    }: ModernPageviewsArgs) => {
      try {
        const query = gql`
          query modernPageviewsQuery(
            $partnerId: String!
            $period: AnalyticsQueryPeriodEnum!
            $cumulative: Boolean
          ) {
            partner(id: $partnerId) {
              name
              analytics {
                pageview(period: $period) {
                  totalCount
                  percentageChanged
                  artworkViews
                  galleryViews
                  showViews
                  uniqueVisitors
                  ${
                    includeTimeSeries
                      ? `
                  timeSeries(cumulative: $cumulative) {
                    count
                    startTime
                    endTime
                  }
                  `
                      : ""
                  }
                }
              }
            }
          }
        `

        const data = await executeQuery<{
          partner?: { name?: string | null; analytics?: { pageview?: any } }
        }>(query, { partnerId, period, cumulative })
        const pageviewData = data.partner?.analytics?.pageview

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  partner: data.partner?.name,
                  period,
                  cumulative,
                  pageviews: {
                    totalCount: pageviewData?.totalCount,
                    percentageChanged: pageviewData?.percentageChanged,
                    uniqueVisitors: pageviewData?.uniqueVisitors,
                    breakdown: {
                      artworkViews: pageviewData?.artworkViews,
                      galleryViews: pageviewData?.galleryViews,
                      showViews: pageviewData?.showViews,
                    },
                    ...(includeTimeSeries && {
                      timeSeries: pageviewData?.timeSeries || [],
                    }),
                  },
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
              text: `Error fetching modern pageview analytics: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        }
      }
    },
  }
}
