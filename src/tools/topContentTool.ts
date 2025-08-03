import * as z from "zod"
import { gql } from "@urql/core"
import { TopContentQuery } from "generated/graphql"
import { executeQuery } from "utils/graphql"

export interface TopContentArgs {
  partnerId: string
  period?: "FOUR_WEEKS" | "SIXTEEN_WEEKS" | "ONE_YEAR"
  objectType?: "ARTWORK" | "SHOW" | "ARTIST" | "VIEWING_ROOM"
  first?: number
}

export const topContentTool = () => {
  return {
    name: "get_partner_top_content",
    description:
      "Get top-performing content (artworks, shows, artists, or viewing rooms) by views",
    inputSchema: {
      partnerId: z.string().describe("Partner ID to get top content for"),
      period: z
        .enum(["FOUR_WEEKS", "SIXTEEN_WEEKS", "ONE_YEAR"])
        .optional()
        .default("FOUR_WEEKS")
        .describe("Time period for content rankings"),
      objectType: z
        .enum(["ARTWORK", "SHOW", "ARTIST", "VIEWING_ROOM"])
        .optional()
        .default("ARTWORK")
        .describe("Type of content to rank"),
      first: z
        .number()
        .optional()
        .default(10)
        .describe("Number of top results to return"),
    },
    handler: async ({
      partnerId,
      period = "FOUR_WEEKS",
      objectType = "ARTWORK",
      first = 10,
    }: TopContentArgs) => {
      try {
        const query = gql`
          query topContentQuery(
            $partnerId: String!
            $period: AnalyticsQueryPeriodEnum!
            $objectType: AnalyticsRankedStatsObjectTypeEnum!
            $first: Int
          ) {
            partner(id: $partnerId) {
              name
              analytics {
                rankedStats(
                  period: $period
                  objectType: $objectType
                  first: $first
                ) {
                  edges {
                    node {
                      value
                      entity {
                        __typename
                        ... on Artwork {
                          id
                          artworkSlug: slug
                          artworkTitle: title
                          artist {
                            name
                          }
                          image {
                            url
                          }
                        }
                        ... on Show {
                          id
                          showSlug: slug
                          showTitle: name
                          startAt
                          endAt
                          showStatus: status
                        }
                        ... on Artist {
                          id
                          artistSlug: slug
                          artistName: name
                          nationality
                          birthday
                        }
                        ... on ViewingRoom {
                          viewingRoomSlug: slug
                          viewingRoomTitle: title
                          viewingRoomStatus: status
                          published
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `

        const data = await executeQuery<TopContentQuery>(query, {
          partnerId,
          period,
          objectType,
          first,
        })

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  partner: data.partner?.name,
                  period,
                  objectType,
                  topContent:
                    data.partner?.analytics?.rankedStats?.edges?.map(
                      (edge) => ({
                        views: edge?.node?.value,
                        content: edge?.node?.entity,
                      })
                    ) || [],
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
              text: `Error fetching top content: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        }
      }
    },
  }
}
