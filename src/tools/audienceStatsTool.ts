import * as z from "zod"
import { graphql, fetchQuery } from "relay-runtime"
import type { Environment } from "relay-runtime"
import type { audienceStatsToolQuery } from "z__generated__/audienceStatsToolQuery.graphql.js"

export interface AudienceStatsArgs {
  partnerId: string
  period?: "FOUR_WEEKS" | "SIXTEEN_WEEKS" | "ONE_YEAR"
  includeGroupedStats?: boolean
}

export const audienceStatsTool = (relayEnvironment: Environment) => {
  return {
    name: "get_partner_audience_stats",
    description:
      "Get partner audience analytics including unique visitors, commercial visitors, and geographic data",
    inputSchema: {
      partnerId: z
        .string()
        .describe("Partner ID to get audience analytics for"),
      period: z
        .enum(["FOUR_WEEKS", "SIXTEEN_WEEKS", "ONE_YEAR"])
        .optional()
        .default("FOUR_WEEKS")
        .describe("Time period for audience data"),
      includeGroupedStats: z
        .boolean()
        .optional()
        .default(true)
        .describe("Include geographic, device, and referral breakdowns"),
    },
    handler: async ({
      partnerId,
      period = "FOUR_WEEKS",
      includeGroupedStats = true,
    }: AudienceStatsArgs) => {
      try {
        const data = await fetchQuery<audienceStatsToolQuery>(
          relayEnvironment,
          graphql`
            query audienceStatsToolQuery(
              $partnerId: String!
              $period: AnalyticsQueryPeriodEnum!
              $includeGroupedStats: Boolean!
            ) {
              partner(id: $partnerId) {
                name
                analytics {
                  audience(period: $period) {
                    uniqueVisitors
                    commercialVisitors
                  }
                  topCountries: groupedStats(
                    metric: VISITOR_BY_LOCATION
                    period: $period
                    objectType: COUNTRY
                    first: 10
                  ) @include(if: $includeGroupedStats) {
                    edges {
                      node {
                        groupedEntity {
                          ... on AnalyticsVisitorsByCountry {
                            name
                            value
                            percent
                          }
                        }
                      }
                    }
                  }
                  topDevices: groupedStats(
                    metric: VISITOR_BY_DEVICE
                    period: $period
                    objectType: DEVICE
                    first: 10
                  ) @include(if: $includeGroupedStats) {
                    edges {
                      node {
                        groupedEntity {
                          ... on AnalyticsVisitorsByDevice {
                            name
                            value
                            percent
                          }
                        }
                      }
                    }
                  }
                  topReferrals: groupedStats(
                    metric: VISITOR_BY_REFERRAL
                    period: $period
                    objectType: REFERRAL
                    first: 10
                  ) @include(if: $includeGroupedStats) {
                    edges {
                      node {
                        groupedEntity {
                          ... on AnalyticsVisitorsByReferral {
                            name
                            value
                            percent
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          `,
          { partnerId, period, includeGroupedStats }
        ).toPromise()

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  partner: data.partner?.name,
                  period,
                  audience: data.partner?.analytics,
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
              text: `Error fetching audience stats: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        }
      }
    },
  }
}
