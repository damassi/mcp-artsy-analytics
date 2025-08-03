import { z } from "zod"
import { executeQuery } from "../utils/graphql"

export interface CustomQueryArgs {
  query: string
  variables?: Record<string, unknown>
}

export const customQueryTool = () => {
  return {
    name: "query_analytics_custom",
    description: "Execute a custom GraphQL query against the analytics schema",
    inputSchema: {
      query: z.string().describe("GraphQL query string"),
      variables: z
        .record(z.unknown())
        .optional()
        .default({})
        .describe("Variables for the GraphQL query"),
    },
    handler: async ({ query, variables = {} }: CustomQueryArgs) => {
      try {
        const data = await executeQuery(query, variables)

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(data, null, 2),
            },
          ],
        }
      } catch (error) {
        return {
          content: [
            {
              type: "text",
              text: `Error executing custom query: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        }
      }
    },
  }
}
