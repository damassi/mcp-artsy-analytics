/**
 * @generated SignedSource<<9a64d50db37ae50a97a5d7ed0b868f98>>
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
export type artworksPublishedStatsToolQuery$variables = {
  partnerId: string
  period: AnalyticsQueryPeriodEnum
}
export type artworksPublishedStatsToolQuery$data = {
  readonly partner:
    | {
        readonly analytics:
          | {
              readonly artworkPublished:
                | {
                    readonly percentageChanged: number
                    readonly timeSeries: ReadonlyArray<{
                      readonly count: number | null | undefined
                      readonly endTime: any | null | undefined
                      readonly startTime: any | null | undefined
                    }>
                    readonly totalCount: number
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
export type artworksPublishedStatsToolQuery = {
  response: artworksPublishedStatsToolQuery$data
  variables: artworksPublishedStatsToolQuery$variables
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
      alias: null,
      args: null,
      concreteType: "AnalyticsPartnerStats",
      kind: "LinkedField",
      name: "analytics",
      plural: false,
      selections: [
        {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "period",
              variableName: "period",
            },
          ],
          concreteType: "AnalyticsPartnerStatsArtworksPublished",
          kind: "LinkedField",
          name: "artworkPublished",
          plural: false,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "totalCount",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "percentageChanged",
              storageKey: null,
            },
            {
              alias: null,
              args: [
                {
                  kind: "Literal",
                  name: "cumulative",
                  value: false,
                },
              ],
              concreteType: "AnalyticsPartnerStatsArtworksPublishedTimeSeries",
              kind: "LinkedField",
              name: "timeSeries",
              plural: true,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "count",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "startTime",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "endTime",
                  storageKey: null,
                },
              ],
              storageKey: "timeSeries(cumulative:false)",
            },
          ],
          storageKey: null,
        },
      ],
      storageKey: null,
    }
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: "Fragment",
      metadata: null,
      name: "artworksPublishedStatsToolQuery",
      selections: [
        {
          alias: null,
          args: v1 /*: any*/,
          concreteType: "Partner",
          kind: "LinkedField",
          name: "partner",
          plural: false,
          selections: [v2 /*: any*/, v3 /*: any*/],
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
      name: "artworksPublishedStatsToolQuery",
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
            v3 /*: any*/,
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
      cacheID: "39e2b62387a44d150a02603b72029400",
      id: null,
      metadata: {},
      name: "artworksPublishedStatsToolQuery",
      operationKind: "query",
      text: "query artworksPublishedStatsToolQuery(\n  $partnerId: String!\n  $period: AnalyticsQueryPeriodEnum!\n) {\n  partner(id: $partnerId) {\n    name\n    analytics {\n      artworkPublished(period: $period) {\n        totalCount\n        percentageChanged\n        timeSeries(cumulative: false) {\n          count\n          startTime\n          endTime\n        }\n      }\n    }\n    id\n  }\n}\n",
    },
  }
})()

;(node as any).hash = "87348bfdf181c4356f47f6314dc74f1f"

export default node
