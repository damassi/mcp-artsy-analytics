import * as z from "zod"

export interface SalesTimeSeriesArgs {
  partnerId: string
  period?: "FOUR_WEEKS" | "SIXTEEN_WEEKS" | "ONE_YEAR"
  cumulative?: boolean
}

export const salesTimeSeriesTool = () => {
  return {
    name: "get_partner_sales_time_series",
    description:
      "Get detailed sales analytics with time series data including revenue amounts",
    inputSchema: {
      partnerId: z.string().describe("Partner ID to get sales time series for"),
      period: z
        .enum(["FOUR_WEEKS", "SIXTEEN_WEEKS", "ONE_YEAR"])
        .optional()
        .default("FOUR_WEEKS")
        .describe("Time period for sales data"),
      cumulative: z
        .boolean()
        .optional()
        .default(false)
        .describe("Whether to show cumulative sales over time"),
    },
    handler: async ({
      partnerId,
      period = "FOUR_WEEKS",
      cumulative = false,
    }: SalesTimeSeriesArgs) => {
      try {
        const query = `
          query salesTimeSeriesQuery(
            $partnerId: String!
            $period: AnalyticsQueryPeriodEnum!
            $cumulative: Boolean
          ) {
            partner(id: $partnerId) {
              name
              analytics {
                sales(period: $period) {
                  orderCount
                  orderResponseTime
                  totalCents
                  total
                  timeSeries(cumulative: $cumulative) {
                    count
                    total
                    totalCents
                    startTime
                    endTime
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
            variables: { partnerId, period, cumulative }
          })
        })

        const data = await response.json()
        const salesData = data.data?.partner?.analytics?.sales

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  partner: data.data?.partner?.name,
                  period,
                  cumulative,
                  sales: {
                    summary: {
                      orderCount: salesData?.orderCount,
                      orderResponseTime: salesData?.orderResponseTime,
                      totalRevenue: salesData?.total,
                      totalRevenueCents: salesData?.totalCents,
                    },
                    timeSeries: salesData?.timeSeries || [],
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
              text: `Error fetching sales time series: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        }
      }
    },
  }
}