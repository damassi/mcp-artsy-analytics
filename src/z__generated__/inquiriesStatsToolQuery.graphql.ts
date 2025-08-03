/**
 * @generated SignedSource<<35fc62d7e8ed2a76d523a54d1b491f91>>
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
export type inquiriesStatsToolQuery$variables = {
  partnerId: string
  period: AnalyticsQueryPeriodEnum
}
export type inquiriesStatsToolQuery$data = {
  readonly partner:
    | {
        readonly analytics:
          | {
              readonly inquiry:
                | {
                    readonly inquiryCount: number
                    readonly inquiryResponseTime: number | null | undefined
                    readonly timeSeries:
                      | ReadonlyArray<{
                          readonly count: number | null | undefined
                          readonly endTime: any | null | undefined
                          readonly startTime: any | null | undefined
                        }>
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
export type inquiriesStatsToolQuery = {
  response: inquiriesStatsToolQuery$data
  variables: inquiriesStatsToolQuery$variables
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
            {
              alias: null,
              args: [
                {
                  kind: "Literal",
                  name: "cumulative",
                  value: false,
                },
              ],
              concreteType: "AnalyticsPartnerInquiryCountTimeSeriesStats",
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
      name: "inquiriesStatsToolQuery",
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
      name: "inquiriesStatsToolQuery",
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
      cacheID: "8524948912f6d8f8f34c9c71592d917a",
      id: null,
      metadata: {},
      name: "inquiriesStatsToolQuery",
      operationKind: "query",
      text: "query inquiriesStatsToolQuery(\n  $partnerId: String!\n  $period: AnalyticsQueryPeriodEnum!\n) {\n  partner(id: $partnerId) {\n    name\n    analytics {\n      inquiry(period: $period) {\n        inquiryCount\n        inquiryResponseTime\n        timeSeries(cumulative: false) {\n          count\n          startTime\n          endTime\n        }\n      }\n    }\n    id\n  }\n}\n",
    },
  }
})()

;(node as any).hash = "d88bb52d8916ffaf7048860133e6c23c"

export default node
