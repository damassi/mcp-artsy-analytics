import * as z from "zod"

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
        const query = `
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
                          slug
                          title
                          artist {
                            name
                          }
                          image {
                            url
                          }
                        }
                        ... on Show {
                          id
                          slug
                          name
                          startAt
                          endAt
                          status
                        }
                        ... on Artist {
                          id
                          slug
                          name
                          nationality
                          birthday
                        }
                        ... on ViewingRoom {
                          id
                          slug
                          title
                          status
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

        const response = await fetch(process.env.METAPHYSICS_ENDPOINT!, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-USER-ID': process.env.USER_ID!,
            'X-ACCESS-TOKEN': process.env.X_ACCESS_TOKEN!,
            'X-TIMEZONE': Intl.DateTimeFormat().resolvedOptions().timeZone,
            'X-CMS-Request': 'true',
          },
          body: JSON.stringify({
            query,
            variables: { partnerId, period, objectType, first }
          })
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
                  objectType,
                  topContent: data.data?.partner?.analytics?.rankedStats?.edges?.map((edge: any) => ({
                    views: edge.node.value,
                    content: edge.node.entity,
                  })) || [],
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