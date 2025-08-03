import { fetchQuery } from "relay-runtime"
import { getRequest } from "relay-runtime"
import type { Environment } from "relay-runtime"
import { z } from "zod"

export interface CustomQueryArgs {
  query: string
  variables?: Record<string, unknown>
}

export const customQueryTool = (relayEnvironment: Environment) => {
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
        // Create a request object from the query string
        const request = getRequest({
          kind: "Request",
          fragment: {
            kind: "Fragment",
            name: "CustomQuery",
            type: "Query",
            metadata: null,
            argumentDefinitions: [],
            selections: [],
          },
          operation: {
            id: "CustomQuery",
            kind: "Operation",
            name: "CustomQuery",
            argumentDefinitions: [],
            selections: [],
          },
          params: {
            name: "CustomQuery",
            operationKind: "query",
            text: query,
          },
        })

        const data = await fetchQuery(
          relayEnvironment,
          request,
          variables
        ).toPromise()

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
