/**
 * @generated SignedSource<<568cd6158f77d41c079b4cbcd8123c4e>>
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
export type activityStatsToolQuery$variables = {
  partnerId: string
  period: AnalyticsQueryPeriodEnum
}
export type activityStatsToolQuery$data = {
  readonly partner:
    | {
        readonly analytics:
          | {
              readonly pageviews:
                | {
                    readonly artworkViews: number | null | undefined
                    readonly galleryViews: number | null | undefined
                    readonly percentageChanged: number
                    readonly showViews: number | null | undefined
                    readonly timeSeries: ReadonlyArray<{
                      readonly count: number | null | undefined
                      readonly endTime: any | null | undefined
                      readonly startTime: any | null | undefined
                    }>
                    readonly totalCount: number
                    readonly uniqueVisitors: number | null | undefined
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
export type activityStatsToolQuery = {
  response: activityStatsToolQuery$data
  variables: activityStatsToolQuery$variables
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
          concreteType: "AnalyticsPageviewStats",
          kind: "LinkedField",
          name: "pageviews",
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
              concreteType: "AnalyticsPartnerTimeSeriesStats",
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
              storageKey: null,
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
      name: "activityStatsToolQuery",
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
      name: "activityStatsToolQuery",
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
      cacheID: "b9a75b5dc12bf946c4a170539951a1eb",
      id: null,
      metadata: {},
      name: "activityStatsToolQuery",
      operationKind: "query",
      text: "query activityStatsToolQuery(\n  $partnerId: String!\n  $period: AnalyticsQueryPeriodEnum!\n) {\n  partner(id: $partnerId) {\n    name\n    analytics {\n      pageviews(period: $period) {\n        totalCount\n        percentageChanged\n        artworkViews\n        galleryViews\n        showViews\n        uniqueVisitors\n        timeSeries {\n          count\n          startTime\n          endTime\n        }\n      }\n    }\n    id\n  }\n}\n",
    },
  }
})()

;(node as any).hash = "46f37ff09d276dfbdae18bc937618c65"

export default node
