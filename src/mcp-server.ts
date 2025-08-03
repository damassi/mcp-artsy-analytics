import "dotenv/config"
import { createRelayEnvironment } from "./system/relay/relayEnvironment.js"

import { activityStatsTool } from "./tools/activityStatsTool.js"
import { salesStatsTool } from "./tools/salesStatsTool.js"
import { customQueryTool } from "./tools/customQueryTool.js"
import { artworksPublishedStatsTool } from "./tools/artworksPublishedStatsTool.js"
import { audienceStatsTool } from "./tools/audienceStatsTool.js"
import { completeAnalyticsTool } from "./tools/completeAnalyticsTool.js"
import { inquiriesStatsTool } from "./tools/inquiriesStatsTool.js"
import { topArtworksTool } from "./tools/topArtworksTool.js"
import { visitorDemographicsTool } from "./tools/visitorDemographicsTool.js"
import { timeSeriesAnalyticsTool } from "./tools/timeSeriesAnalyticsTool.js"
import { modernPageviewsTool } from "./tools/modernPageviewsTool.js"
import { topContentTool } from "./tools/topContentTool.js"
import { salesTimeSeriesTool } from "./tools/salesTimeSeriesTool.js"
import { inquiryTimeSeriesTool } from "./tools/inquiryTimeSeriesTool.js"
import { McpServer } from "../node_modules/@modelcontextprotocol/sdk/dist/cjs/server/mcp.js"
import { StdioServerTransport } from "../node_modules/@modelcontextprotocol/sdk/dist/cjs/server/stdio.js"

const relayEnvironment = createRelayEnvironment()

const server = new McpServer({
  name: "artsy-analytics-server",
  version: "1.0.0",
})

const tools = [
  activityStatsTool(relayEnvironment),
  salesStatsTool(relayEnvironment),
  customQueryTool(relayEnvironment),
  artworksPublishedStatsTool(relayEnvironment),
  audienceStatsTool(relayEnvironment),
  completeAnalyticsTool(relayEnvironment),
  inquiriesStatsTool(relayEnvironment),
  topArtworksTool(relayEnvironment),
  visitorDemographicsTool(),
  timeSeriesAnalyticsTool(),
  modernPageviewsTool(),
  topContentTool(),
  salesTimeSeriesTool(),
  inquiryTimeSeriesTool(),
]

tools.forEach((tool) => {
  server.registerTool(
    tool.name,
    {
      title: tool.name,
      description: tool.description,
      inputSchema: tool.inputSchema,
    },
    async (args) => {
      try {
        const result = await tool.handler(args)
        return result
      } catch (error) {
        console.log(`Tool error: ${tool.name}`, {
          error: error instanceof Error ? error.message : error,
        })
        throw error
      }
    }
  )
})

// Start receiving messages on stdin and sending messages on stdout
async function startServer() {
  const transport = new StdioServerTransport()
  await server.connect(transport)
}

startServer().catch(console.error)
