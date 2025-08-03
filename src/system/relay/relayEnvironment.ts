import { Environment, RecordSource, Store } from "relay-runtime"
import {
  RelayNetworkLayer,
  urlMiddleware,
  loggerMiddleware,
  cacheMiddleware,
  errorMiddleware,
} from "react-relay-network-modern"

export const createRelayEnvironment = (userId: string): Environment => {
  const url = process.env.METAPHYSICS_URL as string

  const authenticatedHeaders = (() => {
    if (userId) {
      return {
        "X-USER-ID": process.env.USER_ID || userId,
        "X-ACCESS-TOKEN": process.env.X_ACCESS_TOKEN
      }
    }
    return {}
  })()

  const network = new RelayNetworkLayer(
    [
      urlMiddleware({
        url,
        headers: {
          "X-TIMEZONE": Intl.DateTimeFormat().resolvedOptions().timeZone,
          "X-CMS-Request": "true",
          ...authenticatedHeaders as Record<string, string>,
        },
      }),
      cacheMiddleware({
        size: 100,
        ttl: 20 * 60 * 1000, // 20 minutes
        clearOnMutation: true,
      }),
      loggerMiddleware(),
      errorMiddleware({
        disableServerMiddlewareTip: true,
      }),
    ],
    // TODO: Look closer at forces config for more advanced error handling.
    { noThrow: true },
  )
  const source = new RecordSource()
  const store = new Store(source)
  const relayEnvironment = new Environment({ network, store })

  return relayEnvironment
}
