/**
 * @generated SignedSource<<591b4d78771f36cb7f6066d196aaa35d>>
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
export type topArtworksToolQuery$variables = {
  limit: number
  partnerId: string
  period: AnalyticsQueryPeriodEnum
}
export type topArtworksToolQuery$data = {
  readonly partner:
    | {
        readonly analytics:
          | {
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
                                          readonly image:
                                            | {
                                                readonly cropped:
                                                  | {
                                                      readonly url: string
                                                    }
                                                  | null
                                                  | undefined
                                              }
                                            | null
                                            | undefined
                                          readonly isUnlisted: boolean
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
            }
          | null
          | undefined
        readonly name: string | null | undefined
      }
    | null
    | undefined
}
export type topArtworksToolQuery = {
  response: topArtworksToolQuery$data
  variables: topArtworksToolQuery$variables
}

const node: ConcreteRequest = (function () {
  var v0 = {
      defaultValue: null,
      kind: "LocalArgument",
      name: "limit",
    },
    v1 = {
      defaultValue: null,
      kind: "LocalArgument",
      name: "partnerId",
    },
    v2 = {
      defaultValue: null,
      kind: "LocalArgument",
      name: "period",
    },
    v3 = [
      {
        kind: "Variable",
        name: "id",
        variableName: "partnerId",
      },
    ],
    v4 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "name",
      storageKey: null,
    },
    v5 = [
      {
        kind: "Variable",
        name: "first",
        variableName: "limit",
      },
      {
        kind: "Literal",
        name: "objectType",
        value: "ARTWORK",
      },
      {
        kind: "Variable",
        name: "period",
        variableName: "period",
      },
    ],
    v6 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "value",
      storageKey: null,
    },
    v7 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "__typename",
      storageKey: null,
    },
    v8 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "id",
      storageKey: null,
    },
    v9 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "slug",
      storageKey: null,
    },
    v10 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "title",
      storageKey: null,
    },
    v11 = {
      alias: null,
      args: null,
      concreteType: "Image",
      kind: "LinkedField",
      name: "image",
      plural: false,
      selections: [
        {
          alias: null,
          args: [
            {
              kind: "Literal",
              name: "height",
              value: 300,
            },
            {
              kind: "Literal",
              name: "width",
              value: 300,
            },
          ],
          concreteType: "CroppedImageUrl",
          kind: "LinkedField",
          name: "cropped",
          plural: false,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "url",
              storageKey: null,
            },
          ],
          storageKey: "cropped(height:300,width:300)",
        },
      ],
      storageKey: null,
    },
    v12 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "isUnlisted",
      storageKey: null,
    }
  return {
    fragment: {
      argumentDefinitions: [v0 /*: any*/, v1 /*: any*/, v2 /*: any*/],
      kind: "Fragment",
      metadata: null,
      name: "topArtworksToolQuery",
      selections: [
        {
          alias: null,
          args: v3 /*: any*/,
          concreteType: "Partner",
          kind: "LinkedField",
          name: "partner",
          plural: false,
          selections: [
            v4 /*: any*/,
            {
              alias: null,
              args: null,
              concreteType: "AnalyticsPartnerStats",
              kind: "LinkedField",
              name: "analytics",
              plural: false,
              selections: [
                {
                  alias: null,
                  args: v5 /*: any*/,
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
                            v6 /*: any*/,
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "entity",
                              plural: false,
                              selections: [
                                v7 /*: any*/,
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    v8 /*: any*/,
                                    v9 /*: any*/,
                                    v10 /*: any*/,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "Artist",
                                      kind: "LinkedField",
                                      name: "artist",
                                      plural: false,
                                      selections: [v4 /*: any*/],
                                      storageKey: null,
                                    },
                                    v11 /*: any*/,
                                    v12 /*: any*/,
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
      argumentDefinitions: [v1 /*: any*/, v2 /*: any*/, v0 /*: any*/],
      kind: "Operation",
      name: "topArtworksToolQuery",
      selections: [
        {
          alias: null,
          args: v3 /*: any*/,
          concreteType: "Partner",
          kind: "LinkedField",
          name: "partner",
          plural: false,
          selections: [
            v4 /*: any*/,
            {
              alias: null,
              args: null,
              concreteType: "AnalyticsPartnerStats",
              kind: "LinkedField",
              name: "analytics",
              plural: false,
              selections: [
                {
                  alias: null,
                  args: v5 /*: any*/,
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
                            v6 /*: any*/,
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "entity",
                              plural: false,
                              selections: [
                                v7 /*: any*/,
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    v8 /*: any*/,
                                    v9 /*: any*/,
                                    v10 /*: any*/,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "Artist",
                                      kind: "LinkedField",
                                      name: "artist",
                                      plural: false,
                                      selections: [v4 /*: any*/, v8 /*: any*/],
                                      storageKey: null,
                                    },
                                    v11 /*: any*/,
                                    v12 /*: any*/,
                                  ],
                                  type: "Artwork",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [v8 /*: any*/],
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
            v8 /*: any*/,
          ],
          storageKey: null,
        },
      ],
    },
    params: {
      cacheID: "68ae8fc1b7e2414589f1aa3518075121",
      id: null,
      metadata: {},
      name: "topArtworksToolQuery",
      operationKind: "query",
      text: "query topArtworksToolQuery(\n  $partnerId: String!\n  $period: AnalyticsQueryPeriodEnum!\n  $limit: Int!\n) {\n  partner(id: $partnerId) {\n    name\n    analytics {\n      rankedStats(objectType: ARTWORK, period: $period, first: $limit) {\n        edges {\n          node {\n            value\n            entity {\n              __typename\n              ... on Artwork {\n                id\n                slug\n                title\n                artist {\n                  name\n                  id\n                }\n                image {\n                  cropped(width: 300, height: 300) {\n                    url\n                  }\n                }\n                isUnlisted\n              }\n              ... on Node {\n                __isNode: __typename\n                id\n              }\n            }\n          }\n        }\n      }\n    }\n    id\n  }\n}\n",
    },
  }
})()

;(node as any).hash = "80340f75be0b080e327ecdd67e1094b3"

export default node
