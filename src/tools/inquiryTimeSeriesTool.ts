import * as z from "zod"

export interface InquiryTimeSeriesArgs {
  partnerId: string
  period?: "FOUR_WEEKS" | "SIXTEEN_WEEKS" | "ONE_YEAR"
  cumulative?: boolean
}

export const inquiryTimeSeriesTool = () => {
  return {
    name: "get_partner_inquiry_time_series",
    description:
      "Get detailed inquiry analytics with time series data and response times",
    inputSchema: {
      partnerId: z.string().describe("Partner ID to get inquiry time series for"),
      period: z
        .enum(["FOUR_WEEKS", "SIXTEEN_WEEKS", "ONE_YEAR"])
        .optional()
        .default("FOUR_WEEKS")
        .describe("Time period for inquiry data"),
      cumulative: z
        .boolean()
        .optional()
        .default(false)
        .describe("Whether to show cumulative inquiries over time"),
    },
    handler: async ({
      partnerId,
      period = "FOUR_WEEKS",
      cumulative = false,
    }: InquiryTimeSeriesArgs) => {
      try {
        const query = `
          query inquiryTimeSeriesQuery(
            $partnerId: String!
            $period: AnalyticsQueryPeriodEnum!
            $cumulative: Boolean
          ) {
            partner(id: $partnerId) {
              name
              analytics {
                inquiry(period: $period) {
                  inquiryCount
                  inquiryResponseTime
                  timeSeries(cumulative: $cumulative) {
                    count
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
        const inquiryData = data.data?.partner?.analytics?.inquiry

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  partner: data.data?.partner?.name,
                  period,
                  cumulative,
                  inquiries: {
                    summary: {
                      inquiryCount: inquiryData?.inquiryCount,
                      inquiryResponseTime: inquiryData?.inquiryResponseTime,
                      avgResponseTimeHours: inquiryData?.inquiryResponseTime ? Math.round(inquiryData.inquiryResponseTime / 3600 * 100) / 100 : null,
                    },
                    timeSeries: inquiryData?.timeSeries || [],
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
              text: `Error fetching inquiry time series: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        }
      }
    },
  }
}