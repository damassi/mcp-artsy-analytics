import * as z from "zod"
import { graphql, fetchQuery } from "relay-runtime"
import type { Environment } from "relay-runtime"
import type { completeAnalyticsToolQuery } from "z__generated__/completeAnalyticsToolQuery.graphql.js"

export interface CompleteAnalyticsArgs {
  partnerId: string
  period?: "FOUR_WEEKS" | "SIXTEEN_WEEKS" | "ONE_YEAR"
}

export const completeAnalyticsTool = (relayEnvironment: Environment) => {
  return {
    name: "get_partner_complete_analytics",
    description:
      "Get comprehensive analytics overview for a partner including all major metrics",
    inputSchema: {
      partnerId: z
        .string()
        .describe("Partner ID to get complete analytics for"),
      period: z
        .enum(["FOUR_WEEKS", "SIXTEEN_WEEKS", "ONE_YEAR"])
        .optional()
        .default("FOUR_WEEKS")
        .describe("Time period for all analytics data"),
    },
    handler: async ({
      partnerId,
      period = "FOUR_WEEKS",
    }: CompleteAnalyticsArgs) => {
      try {
        const data = await fetchQuery<completeAnalyticsToolQuery>(
          relayEnvironment,
          graphql`
            query completeAnalyticsToolQuery(
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
                  }
                  sales(period: $period) {
                    orderCount
                    orderResponseTime
                    totalCents
                    total
                  }
                  inquiry(period: $period) {
                    inquiryCount
                    inquiryResponseTime
                  }
                  audience(period: $period) {
                    uniqueVisitors
                    commercialVisitors
                  }
                  artworkPublished(period: $period) {
                    totalCount
                    percentageChanged
                  }
                  rankedStats(objectType: ARTWORK, period: $period, first: 10) {
                    edges {
                      node {
                        value
                        entity {
                          __typename
                          ... on Artwork {
                            id
                            slug
                            title
                            artist {
                              name
                            }
                          }
                        }
                      }
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
                  completeAnalytics: data.partner?.analytics,
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
              text: `Error fetching complete analytics: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        }
      }
    },
  }
}
