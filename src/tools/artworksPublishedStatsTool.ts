import * as z from "zod"
import { executeQuery } from "../utils/graphql"
import { gql } from "@urql/core"
import { ArtworksPublishedStatsToolQuery } from "generated/graphql"

export interface ArtworksPublishedStatsArgs {
  partnerId: string
  period?: "FOUR_WEEKS" | "SIXTEEN_WEEKS" | "ONE_YEAR"
}

export const artworksPublishedStatsTool = () => {
  return {
    name: "get_partner_artworks_published_stats",
    description: "Get partner artwork publishing statistics and trends",
    inputSchema: {
      partnerId: z.string().describe("Partner ID to get publishing stats for"),
      period: z
        .enum(["FOUR_WEEKS", "SIXTEEN_WEEKS", "ONE_YEAR"])
        .optional()
        .default("FOUR_WEEKS")
        .describe("Time period for publishing data"),
    },
    handler: async ({
      partnerId,
      period = "FOUR_WEEKS",
    }: ArtworksPublishedStatsArgs) => {
      try {
        const query = gql`
          query artworksPublishedStatsToolQuery(
            $partnerId: String!
            $period: AnalyticsQueryPeriodEnum!
          ) {
            partner(id: $partnerId) {
              name
              analytics {
                artworkPublished(period: $period) {
                  totalCount
                  percentageChanged
                  timeSeries(cumulative: false) {
                    count
                    startTime
                    endTime
                  }
                }
              }
            }
          }
        `

        const data = await executeQuery<ArtworksPublishedStatsToolQuery>(
          query,
          { partnerId, period }
        )

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  partner: data.partner?.name,
                  period,
                  artworksPublished: data.partner?.analytics?.artworkPublished,
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
              text: `Error fetching artworks published stats: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        }
      }
    },
  }
}
