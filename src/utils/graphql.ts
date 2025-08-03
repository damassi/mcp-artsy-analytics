import { createClient, fetchExchange, TypedDocumentNode } from "@urql/core"

export const urqlClient = createClient({
  url: process.env.METAPHYSICS_ENDPOINT!,
  exchanges: [fetchExchange],
  fetchOptions: () => ({
    headers: {
      "X-USER-ID": process.env.USER_ID!,
      "X-ACCESS-TOKEN": process.env.X_ACCESS_TOKEN!,
      "X-TIMEZONE": Intl.DateTimeFormat().resolvedOptions().timeZone,
      "X-CMS-Request": "true",
    },
  }),
})

export async function executeQuery<T = unknown>(
  query: string | TypedDocumentNode<any, any>,
  variables?: Record<string, unknown>
): Promise<T> {
  const result = await urqlClient.query(query, variables).toPromise()

  if (result.error) {
    throw new Error(result.error.message)
  }

  return result.data as T
}
