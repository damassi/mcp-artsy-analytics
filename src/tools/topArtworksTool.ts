import * as z from "zod"
import { graphql, fetchQuery } from "relay-runtime"
import type { Environment } from "relay-runtime"
import type { topArtworksToolQuery } from "z__generated__/topArtworksToolQuery.graphql.js"

export interface TopArtworksArgs {
  partnerId: string
  period?: "FOUR_WEEKS" | "SIXTEEN_WEEKS" | "ONE_YEAR"
  limit?: number
}

export const topArtworksTool = (relayEnvironment: Environment) => {
  return {
    name: "get_partner_top_artworks",
    description: "Get partner's most viewed artworks with ranking data",
    inputSchema: {
      partnerId: z.string().describe("Partner ID to get top artworks for"),
      period: z
        .enum(["FOUR_WEEKS", "SIXTEEN_WEEKS", "ONE_YEAR"])
        .optional()
        .default("FOUR_WEEKS")
        .describe("Time period for ranking data"),
      limit: z
        .number()
        .int()
        .min(1)
        .max(50)
        .optional()
        .default(15)
        .describe("Number of top artworks to return"),
    },
    handler: async ({
      partnerId,
      period = "FOUR_WEEKS",
      limit = 15,
    }: TopArtworksArgs) => {
      try {
        const data = await fetchQuery<topArtworksToolQuery>(
          relayEnvironment,
          graphql`
            query topArtworksToolQuery(
              $partnerId: String!
              $period: AnalyticsQueryPeriodEnum!
              $limit: Int!
            ) {
              partner(id: $partnerId) {
                name
                analytics {
                  rankedStats(
                    objectType: ARTWORK
                    period: $period
                    first: $limit
                  ) {
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
                            image {
                              cropped(width: 300, height: 300) {
                                url
                              }
                            }
                            isUnlisted
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          `,
          { partnerId, period, limit }
        ).toPromise()

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  partner: data.partner?.name,
                  period,
                  topArtworks: data.partner?.analytics?.rankedStats,
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
              text: `Error fetching top artworks: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        }
      }
    },
  }
}
