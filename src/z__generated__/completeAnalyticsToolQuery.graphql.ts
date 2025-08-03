/**
 * @generated SignedSource<<3bdcf7b2ebcd300d2a0897cfb344879d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime"
export type AnalyticsQueryPeriodEnum =
  | "FOUR_WEEKS"
  | "ONE_YEAR"
  | "SIXTEEN_WEEKS"
  | "%future added value"
export type completeAnalyticsToolQuery$variables = {
  partnerId: string
  period: AnalyticsQueryPeriodEnum
}
export type completeAnalyticsToolQuery$data = {
  readonly partner:
    | {
        readonly analytics:
          | {
              readonly artworkPublished:
                | {
                    readonly percentageChanged: number
                    readonly totalCount: number
                  }
                | null
                | undefined
              readonly audience:
                | {
                    readonly commercialVisitors: number
                    readonly uniqueVisitors: number
                  }
                | null
                | undefined
              readonly inquiry:
                | {
                    readonly inquiryCount: number
                    readonly inquiryResponseTime: number | null | undefined
                  }
                | null
                | undefined
              readonly pageviews:
                | {
                    readonly artworkViews: number | null | undefined
                    readonly galleryViews: number | null | undefined
                    readonly percentageChanged: number
                    readonly showViews: number | null | undefined
                    readonly totalCount: number
                    readonly uniqueVisitors: number | null | undefined
                  }
                | null
                | undefined
              readonly rankedStats:
                | {
                    readonly edges:
                      | ReadonlyArray<
                          | {
                              readonly node:
                                | {
                                    readonly entity:
                                      | {
                                          readonly __typename: "Artwork"
                                          readonly artist:
                                            | {
                                                readonly name:
                                                  | string
                                                  | null
                                                  | undefined
                                              }
                                            | null
                                            | undefined
                                          readonly id: string
                                          readonly slug: string
                                          readonly title:
                                            | string
                                            | null
                                            | undefined
                                        }
                                      | {
                                          // This will never be '%other', but we need some
                                          // value in case none of the concrete values match.
                                          readonly __typename: "%other"
                                        }
                                      | null
                                      | undefined
                                    readonly value: number
                                  }
                                | null
                                | undefined
                            }
                          | null
                          | undefined
                        >
                      | null
                      | undefined
                  }
                | null
                | undefined
              readonly sales:
                | {
                    readonly orderCount: number
                    readonly orderResponseTime: number | null | undefined
                    readonly total: string | null | undefined
                    readonly totalCents: number
                  }
                | null
                | undefined
            }
          | null
          | undefined
        readonly name: string | null | undefined
      }
    | null
    | undefined
}
export type completeAnalyticsToolQuery = {
  response: completeAnalyticsToolQuery$data
  variables: completeAnalyticsToolQuery$variables
}

const node: ConcreteRequest = (function () {
  var v0 = [
      {
        defaultValue: null,
        kind: "LocalArgument",
        name: "partnerId",
      },
      {
        defaultValue: null,
        kind: "LocalArgument",
        name: "period",
      },
    ],
    v1 = [
      {
        kind: "Variable",
        name: "id",
        variableName: "partnerId",
      },
    ],
    v2 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "name",
      storageKey: null,
    },
    v3 = {
      kind: "Variable",
      name: "period",
      variableName: "period",
    },
    v4 = [v3 /*: any*/],
    v5 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "totalCount",
      storageKey: null,
    },
    v6 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "percentageChanged",
      storageKey: null,
    },
    v7 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "uniqueVisitors",
      storageKey: null,
    },
    v8 = {
      alias: null,
      args: v4 /*: any*/,
      concreteType: "AnalyticsPageviewStats",
      kind: "LinkedField",
      name: "pageviews",
      plural: false,
      selections: [
        v5 /*: any*/,
        v6 /*: any*/,
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "artworkViews",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "galleryViews",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "showViews",
          storageKey: null,
        },
        v7 /*: any*/,
      ],
      storageKey: null,
    },
    v9 = {
      alias: null,
      args: v4 /*: any*/,
      concreteType: "AnalyticsPartnerSalesStats",
      kind: "LinkedField",
      name: "sales",
      plural: false,
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "orderCount",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "orderResponseTime",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "totalCents",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "total",
          storageKey: null,
        },
      ],
      storageKey: null,
    },
    v10 = {
      alias: null,
      args: v4 /*: any*/,
      concreteType: "AnalyticsPartnerInquiryStats",
      kind: "LinkedField",
      name: "inquiry",
      plural: false,
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "inquiryCount",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "inquiryResponseTime",
          storageKey: null,
        },
      ],
      storageKey: null,
    },
    v11 = {
      alias: null,
      args: v4 /*: any*/,
      concreteType: "AnalyticsPartnerAudienceStats",
      kind: "LinkedField",
      name: "audience",
      plural: false,
      selections: [
        v7 /*: any*/,
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "commercialVisitors",
          storageKey: null,
        },
      ],
      storageKey: null,
    },
    v12 = {
      alias: null,
      args: v4 /*: any*/,
      concreteType: "AnalyticsPartnerStatsArtworksPublished",
      kind: "LinkedField",
      name: "artworkPublished",
      plural: false,
      selections: [v5 /*: any*/, v6 /*: any*/],
      storageKey: null,
    },
    v13 = [
      {
        kind: "Literal",
        name: "first",
        value: 10,
      },
      {
        kind: "Literal",
        name: "objectType",
        value: "ARTWORK",
      },
      v3 /*: any*/,
    ],
    v14 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "value",
      storageKey: null,
    },
    v15 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "__typename",
      storageKey: null,
    },
    v16 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "id",
      storageKey: null,
    },
    v17 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "slug",
      storageKey: null,
    },
    v18 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "title",
      storageKey: null,
    }
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: "Fragment",
      metadata: null,
      name: "completeAnalyticsToolQuery",
      selections: [
        {
          alias: null,
          args: v1 /*: any*/,
          concreteType: "Partner",
          kind: "LinkedField",
          name: "partner",
          plural: false,
          selections: [
            v2 /*: any*/,
            {
              alias: null,
              args: null,
              concreteType: "AnalyticsPartnerStats",
              kind: "LinkedField",
              name: "analytics",
              plural: false,
              selections: [
                v8 /*: any*/,
                v9 /*: any*/,
                v10 /*: any*/,
                v11 /*: any*/,
                v12 /*: any*/,
                {
                  alias: null,
                  args: v13 /*: any*/,
                  concreteType: "AnalyticsRankedStatsConnection",
                  kind: "LinkedField",
                  name: "rankedStats",
                  plural: false,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "AnalyticsRankedStatsEdge",
                      kind: "LinkedField",
                      name: "edges",
                      plural: true,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "AnalyticsRankedStats",
                          kind: "LinkedField",
                          name: "node",
                          plural: false,
                          selections: [
                            v14 /*: any*/,
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "entity",
                              plural: false,
                              selections: [
                                v15 /*: any*/,
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    v16 /*: any*/,
                                    v17 /*: any*/,
                                    v18 /*: any*/,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "Artist",
                                      kind: "LinkedField",
                                      name: "artist",
                                      plural: false,
                                      selections: [v2 /*: any*/],
                                      storageKey: null,
                                    },
                                  ],
                                  type: "Artwork",
                                  abstractKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "Query",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: "Operation",
      name: "completeAnalyticsToolQuery",
      selections: [
        {
          alias: null,
          args: v1 /*: any*/,
          concreteType: "Partner",
          kind: "LinkedField",
          name: "partner",
          plural: false,
          selections: [
            v2 /*: any*/,
            {
              alias: null,
              args: null,
              concreteType: "AnalyticsPartnerStats",
              kind: "LinkedField",
              name: "analytics",
              plural: false,
              selections: [
                v8 /*: any*/,
                v9 /*: any*/,
                v10 /*: any*/,
                v11 /*: any*/,
                v12 /*: any*/,
                {
                  alias: null,
                  args: v13 /*: any*/,
                  concreteType: "AnalyticsRankedStatsConnection",
                  kind: "LinkedField",
                  name: "rankedStats",
                  plural: false,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "AnalyticsRankedStatsEdge",
                      kind: "LinkedField",
                      name: "edges",
                      plural: true,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "AnalyticsRankedStats",
                          kind: "LinkedField",
                          name: "node",
                          plural: false,
                          selections: [
                            v14 /*: any*/,
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "entity",
                              plural: false,
                              selections: [
                                v15 /*: any*/,
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    v16 /*: any*/,
                                    v17 /*: any*/,
                                    v18 /*: any*/,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "Artist",
                                      kind: "LinkedField",
                                      name: "artist",
                                      plural: false,
                                      selections: [v2 /*: any*/, v16 /*: any*/],
                                      storageKey: null,
                                    },
                                  ],
                                  type: "Artwork",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [v16 /*: any*/],
                                  type: "Node",
                                  abstractKey: "__isNode",
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            v16 /*: any*/,
          ],
          storageKey: null,
        },
      ],
    },
    params: {
      cacheID: "d87893c98f7cace9aa3f6c3a55e3b612",
      id: null,
      metadata: {},
      name: "completeAnalyticsToolQuery",
      operationKind: "query",
      text: "query completeAnalyticsToolQuery(\n  $partnerId: String!\n  $period: AnalyticsQueryPeriodEnum!\n) {\n  partner(id: $partnerId) {\n    name\n    analytics {\n      pageviews(period: $period) {\n        totalCount\n        percentageChanged\n        artworkViews\n        galleryViews\n        showViews\n        uniqueVisitors\n      }\n      sales(period: $period) {\n        orderCount\n        orderResponseTime\n        totalCents\n        total\n      }\n      inquiry(period: $period) {\n        inquiryCount\n        inquiryResponseTime\n      }\n      audience(period: $period) {\n        uniqueVisitors\n        commercialVisitors\n      }\n      artworkPublished(period: $period) {\n        totalCount\n        percentageChanged\n      }\n      rankedStats(objectType: ARTWORK, period: $period, first: 10) {\n        edges {\n          node {\n            value\n            entity {\n              __typename\n              ... on Artwork {\n                id\n                slug\n                title\n                artist {\n                  name\n                  id\n                }\n              }\n              ... on Node {\n                __isNode: __typename\n                id\n              }\n            }\n          }\n        }\n      }\n    }\n    id\n  }\n}\n",
    },
  }
})()

;(node as any).hash = "257b5b8c5c8013e3930c92df687fd3c5"

export default node
