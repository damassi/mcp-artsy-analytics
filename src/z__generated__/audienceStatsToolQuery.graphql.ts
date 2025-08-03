/**
 * @generated SignedSource<<1da11f650e2ee0cd02fe7abb0c7294f1>>
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
export type audienceStatsToolQuery$variables = {
  includeGroupedStats: boolean
  partnerId: string
  period: AnalyticsQueryPeriodEnum
}
export type audienceStatsToolQuery$data = {
  readonly partner:
    | {
        readonly analytics:
          | {
              readonly audience:
                | {
                    readonly commercialVisitors: number
                    readonly uniqueVisitors: number
                  }
                | null
                | undefined
              readonly topCountries?:
                | {
                    readonly edges:
                      | ReadonlyArray<
                          | {
                              readonly node:
                                | {
                                    readonly groupedEntity: {
                                      readonly name?: string
                                      readonly percent?: number
                                      readonly value?: number
                                    }
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
              readonly topDevices?:
                | {
                    readonly edges:
                      | ReadonlyArray<
                          | {
                              readonly node:
                                | {
                                    readonly groupedEntity: {
                                      readonly name?: string
                                      readonly percent?: number
                                      readonly value?: number
                                    }
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
              readonly topReferrals?:
                | {
                    readonly edges:
                      | ReadonlyArray<
                          | {
                              readonly node:
                                | {
                                    readonly groupedEntity: {
                                      readonly name?: string
                                      readonly percent?: number
                                      readonly value?: number
                                    }
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
export type audienceStatsToolQuery = {
  response: audienceStatsToolQuery$data
  variables: audienceStatsToolQuery$variables
}

const node: ConcreteRequest = (function () {
  var v0 = {
      defaultValue: null,
      kind: "LocalArgument",
      name: "includeGroupedStats",
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
    v5 = {
      kind: "Variable",
      name: "period",
      variableName: "period",
    },
    v6 = {
      alias: null,
      args: [v5 /*: any*/],
      concreteType: "AnalyticsPartnerAudienceStats",
      kind: "LinkedField",
      name: "audience",
      plural: false,
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "uniqueVisitors",
          storageKey: null,
        },
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
    v7 = {
      kind: "Literal",
      name: "first",
      value: 10,
    },
    v8 = [
      v7 /*: any*/,
      {
        kind: "Literal",
        name: "metric",
        value: "VISITOR_BY_LOCATION",
      },
      {
        kind: "Literal",
        name: "objectType",
        value: "COUNTRY",
      },
      v5 /*: any*/,
    ],
    v9 = [
      v4 /*: any*/,
      {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "value",
        storageKey: null,
      },
      {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "percent",
        storageKey: null,
      },
    ],
    v10 = {
      kind: "InlineFragment",
      selections: v9 /*: any*/,
      type: "AnalyticsVisitorsByCountry",
      abstractKey: null,
    },
    v11 = [
      v7 /*: any*/,
      {
        kind: "Literal",
        name: "metric",
        value: "VISITOR_BY_DEVICE",
      },
      {
        kind: "Literal",
        name: "objectType",
        value: "DEVICE",
      },
      v5 /*: any*/,
    ],
    v12 = {
      kind: "InlineFragment",
      selections: v9 /*: any*/,
      type: "AnalyticsVisitorsByDevice",
      abstractKey: null,
    },
    v13 = [
      v7 /*: any*/,
      {
        kind: "Literal",
        name: "metric",
        value: "VISITOR_BY_REFERRAL",
      },
      {
        kind: "Literal",
        name: "objectType",
        value: "REFERRAL",
      },
      v5 /*: any*/,
    ],
    v14 = {
      kind: "InlineFragment",
      selections: v9 /*: any*/,
      type: "AnalyticsVisitorsByReferral",
      abstractKey: null,
    },
    v15 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "__typename",
      storageKey: null,
    }
  return {
    fragment: {
      argumentDefinitions: [v0 /*: any*/, v1 /*: any*/, v2 /*: any*/],
      kind: "Fragment",
      metadata: null,
      name: "audienceStatsToolQuery",
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
                v6 /*: any*/,
                {
                  condition: "includeGroupedStats",
                  kind: "Condition",
                  passingValue: true,
                  selections: [
                    {
                      alias: "topCountries",
                      args: v8 /*: any*/,
                      concreteType: "AnalyticsGroupedStatsConnection",
                      kind: "LinkedField",
                      name: "groupedStats",
                      plural: false,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "AnalyticsGroupedStatsEdge",
                          kind: "LinkedField",
                          name: "edges",
                          plural: true,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "AnalyticsGroupedStats",
                              kind: "LinkedField",
                              name: "node",
                              plural: false,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "groupedEntity",
                                  plural: false,
                                  selections: [v10 /*: any*/],
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
                    {
                      alias: "topDevices",
                      args: v11 /*: any*/,
                      concreteType: "AnalyticsGroupedStatsConnection",
                      kind: "LinkedField",
                      name: "groupedStats",
                      plural: false,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "AnalyticsGroupedStatsEdge",
                          kind: "LinkedField",
                          name: "edges",
                          plural: true,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "AnalyticsGroupedStats",
                              kind: "LinkedField",
                              name: "node",
                              plural: false,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "groupedEntity",
                                  plural: false,
                                  selections: [v12 /*: any*/],
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
                    {
                      alias: "topReferrals",
                      args: v13 /*: any*/,
                      concreteType: "AnalyticsGroupedStatsConnection",
                      kind: "LinkedField",
                      name: "groupedStats",
                      plural: false,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "AnalyticsGroupedStatsEdge",
                          kind: "LinkedField",
                          name: "edges",
                          plural: true,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "AnalyticsGroupedStats",
                              kind: "LinkedField",
                              name: "node",
                              plural: false,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "groupedEntity",
                                  plural: false,
                                  selections: [v14 /*: any*/],
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
      name: "audienceStatsToolQuery",
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
                v6 /*: any*/,
                {
                  condition: "includeGroupedStats",
                  kind: "Condition",
                  passingValue: true,
                  selections: [
                    {
                      alias: "topCountries",
                      args: v8 /*: any*/,
                      concreteType: "AnalyticsGroupedStatsConnection",
                      kind: "LinkedField",
                      name: "groupedStats",
                      plural: false,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "AnalyticsGroupedStatsEdge",
                          kind: "LinkedField",
                          name: "edges",
                          plural: true,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "AnalyticsGroupedStats",
                              kind: "LinkedField",
                              name: "node",
                              plural: false,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "groupedEntity",
                                  plural: false,
                                  selections: [v15 /*: any*/, v10 /*: any*/],
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
                    {
                      alias: "topDevices",
                      args: v11 /*: any*/,
                      concreteType: "AnalyticsGroupedStatsConnection",
                      kind: "LinkedField",
                      name: "groupedStats",
                      plural: false,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "AnalyticsGroupedStatsEdge",
                          kind: "LinkedField",
                          name: "edges",
                          plural: true,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "AnalyticsGroupedStats",
                              kind: "LinkedField",
                              name: "node",
                              plural: false,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "groupedEntity",
                                  plural: false,
                                  selections: [v15 /*: any*/, v12 /*: any*/],
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
                    {
                      alias: "topReferrals",
                      args: v13 /*: any*/,
                      concreteType: "AnalyticsGroupedStatsConnection",
                      kind: "LinkedField",
                      name: "groupedStats",
                      plural: false,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "AnalyticsGroupedStatsEdge",
                          kind: "LinkedField",
                          name: "edges",
                          plural: true,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "AnalyticsGroupedStats",
                              kind: "LinkedField",
                              name: "node",
                              plural: false,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "groupedEntity",
                                  plural: false,
                                  selections: [v15 /*: any*/, v14 /*: any*/],
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
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "id",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
    },
    params: {
      cacheID: "4fab531d26ef0fa8bd4e4c3b78690530",
      id: null,
      metadata: {},
      name: "audienceStatsToolQuery",
      operationKind: "query",
      text: "query audienceStatsToolQuery(\n  $partnerId: String!\n  $period: AnalyticsQueryPeriodEnum!\n  $includeGroupedStats: Boolean!\n) {\n  partner(id: $partnerId) {\n    name\n    analytics {\n      audience(period: $period) {\n        uniqueVisitors\n        commercialVisitors\n      }\n      topCountries: groupedStats(metric: VISITOR_BY_LOCATION, period: $period, objectType: COUNTRY, first: 10) @include(if: $includeGroupedStats) {\n        edges {\n          node {\n            groupedEntity {\n              __typename\n              ... on AnalyticsVisitorsByCountry {\n                name\n                value\n                percent\n              }\n            }\n          }\n        }\n      }\n      topDevices: groupedStats(metric: VISITOR_BY_DEVICE, period: $period, objectType: DEVICE, first: 10) @include(if: $includeGroupedStats) {\n        edges {\n          node {\n            groupedEntity {\n              __typename\n              ... on AnalyticsVisitorsByDevice {\n                name\n                value\n                percent\n              }\n            }\n          }\n        }\n      }\n      topReferrals: groupedStats(metric: VISITOR_BY_REFERRAL, period: $period, objectType: REFERRAL, first: 10) @include(if: $includeGroupedStats) {\n        edges {\n          node {\n            groupedEntity {\n              __typename\n              ... on AnalyticsVisitorsByReferral {\n                name\n                value\n                percent\n              }\n            }\n          }\n        }\n      }\n    }\n    id\n  }\n}\n",
    },
  }
})()

;(node as any).hash = "feade8864c339681f9ab74316ba5b5dd"

export default node
