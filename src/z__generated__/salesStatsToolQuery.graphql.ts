/**
 * @generated SignedSource<<2637a48491ae89c1094b3919f317166f>>
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
export type salesStatsToolQuery$variables = {
  partnerId: string
  period: AnalyticsQueryPeriodEnum
}
export type salesStatsToolQuery$data = {
  readonly partner:
    | {
        readonly analytics:
          | {
              readonly sales:
                | {
                    readonly orderCount: number
                    readonly orderResponseTime: number | null | undefined
                    readonly timeSeries:
                      | ReadonlyArray<{
                          readonly count: number
                          readonly countDisplay: string | null | undefined
                          readonly endTime: any | null | undefined
                          readonly startTime: any | null | undefined
                        }>
                      | null
                      | undefined
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
export type salesStatsToolQuery = {
  response: salesStatsToolQuery$data
  variables: salesStatsToolQuery$variables
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
            {
              alias: null,
              args: [
                {
                  kind: "Literal",
                  name: "cumulative",
                  value: true,
                },
              ],
              concreteType: "AnalyticsPartnerSalesTimeSeriesStats",
              kind: "LinkedField",
              name: "timeSeries",
              plural: true,
              selections: [
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
                {
                  alias: "count",
                  args: null,
                  kind: "ScalarField",
                  name: "totalCents",
                  storageKey: null,
                },
                {
                  alias: "countDisplay",
                  args: null,
                  kind: "ScalarField",
                  name: "total",
                  storageKey: null,
                },
              ],
              storageKey: "timeSeries(cumulative:true)",
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
      name: "salesStatsToolQuery",
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
      name: "salesStatsToolQuery",
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
      cacheID: "9e44a27679e9acf4976ff843a8c15b93",
      id: null,
      metadata: {},
      name: "salesStatsToolQuery",
      operationKind: "query",
      text: "query salesStatsToolQuery(\n  $partnerId: String!\n  $period: AnalyticsQueryPeriodEnum!\n) {\n  partner(id: $partnerId) {\n    name\n    analytics {\n      sales(period: $period) {\n        orderCount\n        orderResponseTime\n        totalCents\n        total\n        timeSeries(cumulative: true) {\n          startTime\n          endTime\n          count: totalCents\n          countDisplay: total\n        }\n      }\n    }\n    id\n  }\n}\n",
    },
  }
})()

;(node as any).hash = "fa99246ad4f37ae0dbaef7686ea8b0ad"

export default node
