import * as z from "zod"

export interface VisitorDemographicsArgs {
  partnerId: string
  period?: "FOUR_WEEKS" | "SIXTEEN_WEEKS" | "ONE_YEAR"
  metric?: "VISITOR_BY_DEVICE" | "VISITOR_BY_LOCATION" | "VISITOR_BY_REFERRAL" | "VISITOR_BY_LANDING_PAGE"
  objectType?: "DEVICE" | "COUNTRY" | "REFERRAL" | "LANDING_PAGE"
  first?: number
}

export const visitorDemographicsTool = () => {
  return {
    name: "get_partner_visitor_demographics",
    description:
      "Get visitor demographic breakdowns by device, country, referral source, or landing page",
    inputSchema: {
      partnerId: z.string().describe("Partner ID to get visitor demographics for"),
      period: z
        .enum(["FOUR_WEEKS", "SIXTEEN_WEEKS", "ONE_YEAR"])
        .optional()
        .default("FOUR_WEEKS")
        .describe("Time period for demographic data"),
      metric: z
        .enum(["VISITOR_BY_DEVICE", "VISITOR_BY_LOCATION", "VISITOR_BY_REFERRAL", "VISITOR_BY_LANDING_PAGE"])
        .optional()
        .default("VISITOR_BY_LOCATION")
        .describe("Type of demographic breakdown to retrieve"),
      objectType: z
        .enum(["DEVICE", "COUNTRY", "REFERRAL", "LANDING_PAGE"])
        .optional()
        .default("COUNTRY")
        .describe("Object type for the demographic breakdown"),
      first: z
        .number()
        .optional()
        .default(10)
        .describe("Number of top results to return"),
    },
    handler: async ({
      partnerId,
      period = "FOUR_WEEKS",
      metric = "VISITOR_BY_LOCATION",
      objectType = "COUNTRY",
      first = 10,
    }: VisitorDemographicsArgs) => {
      try {
        const query = `
          query visitorDemographicsQuery(
            $partnerId: String!
            $period: AnalyticsQueryPeriodEnum!
            $metric: AnalyticsGroupedStatsMetricEnum!
            $objectType: AnalyticsGroupedStatsObjectTypeEnum!
            $first: Int
          ) {
            partner(id: $partnerId) {
              name
              analytics {
                groupedStats(
                  period: $period
                  metric: $metric
                  objectType: $objectType
                  first: $first
                ) {
                  edges {
                    node {
                      ... on AnalyticsVisitorsByCountry {
                        metric
                        name
                        percent
                        type
                        value
                      }
                      ... on AnalyticsVisitorsByDevice {
                        metric
                        name
                        percent
                        type
                        value
                      }
                      ... on AnalyticsVisitorsByReferral {
                        metric
                        name
                        percent
                        type
                        value
                      }
                      ... on AnalyticsVisitorsByLandingPage {
                        metric
                        name
                        percent
                        type
                        value
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
            variables: { partnerId, period, metric, objectType, first }
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
                  metric,
                  objectType,
                  demographics: data.data?.partner?.analytics?.groupedStats?.edges?.map((edge: any) => edge.node) || [],
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
              text: `Error fetching visitor demographics: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        }
      }
    },
  }
}