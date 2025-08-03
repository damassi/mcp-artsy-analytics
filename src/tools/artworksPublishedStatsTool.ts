import * as z from "zod"
import { graphql, fetchQuery } from "relay-runtime"
import type { Environment } from "relay-runtime"
import type { artworksPublishedStatsToolQuery } from "z__generated__/artworksPublishedStatsToolQuery.graphql.js"

export interface ArtworksPublishedStatsArgs {
  partnerId: string
  period?: "FOUR_WEEKS" | "SIXTEEN_WEEKS" | "ONE_YEAR"
}

export const artworksPublishedStatsTool = (relayEnvironment: Environment) => {
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
        const data = await fetchQuery<artworksPublishedStatsToolQuery>(
          relayEnvironment,
          graphql`
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
