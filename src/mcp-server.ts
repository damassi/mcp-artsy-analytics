import { activityStatsTool } from "./tools/activityStatsTool"
import { salesStatsTool } from "./tools/salesStatsTool"
import { customQueryTool } from "./tools/customQueryTool"
import { artworksPublishedStatsTool } from "./tools/artworksPublishedStatsTool"
import { audienceStatsTool } from "./tools/audienceStatsTool"
import { completeAnalyticsTool } from "./tools/completeAnalyticsTool"
import { inquiriesStatsTool } from "./tools/inquiriesStatsTool"
import { topArtworksTool } from "./tools/topArtworksTool"
import { visitorDemographicsTool } from "./tools/visitorDemographicsTool"
import { timeSeriesAnalyticsTool } from "./tools/timeSeriesAnalyticsTool"
import { modernPageviewsTool } from "./tools/modernPageviewsTool"
import { topContentTool } from "./tools/topContentTool"
import { salesTimeSeriesTool } from "./tools/salesTimeSeriesTool"
import { inquiryTimeSeriesTool } from "./tools/inquiryTimeSeriesTool"
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js"
import chalk from "chalk"
import { log, error as logError } from "utils/logger"

const server = new McpServer({
  name: "artsy-analytics-server",
  version: "1.0.0",
})

const tools = [
  activityStatsTool(),
  salesStatsTool(),
  customQueryTool(),
  artworksPublishedStatsTool(),
  audienceStatsTool(),
  completeAnalyticsTool(),
  inquiriesStatsTool(),
  topArtworksTool(),
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
    async (args: any) => {
      try {
        const result = await tool.handler(args)
        return result as any
      } catch (error) {
        logError(`Tool error: ${tool.name}`, {
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

  try {
    await server.connect(transport)

    log(`
${chalk.magenta("[artsy-analytics-mcp]")} ${chalk.bold("MCP server running.")}

${chalk.cyan("Available Tools:")} ${chalk.yellow(tools.length)} analytics tools loaded

${chalk.bold("Claude Desktop Configuration:")}
Add this to your claude_desktop_config.json:

${chalk.gray(`{
  "mcpServers": {
    "artsy-analytics": {
      "command": "/Users/<user-name>/.bun/bin/bun",
      "args": ["${process.cwd()}/src/mcp-server.ts"],
      "env": {
        "CLAUDE_DESKTOP": "true",
        "METAPHYSICS_ENDPOINT": "your_endpoint",
        "USER_ID": "your_user_id",
        "X_ACCESS_TOKEN": "your_token"
      }
    }
  }
}`)}

${chalk.bold("Config file location:")}
  ${chalk.dim("~/Library/Application Support/Claude/claude_desktop_config.json")}

${chalk.bold("Try asking Claude:")} ${chalk.italic('"Show visitor demographics for gagosian"')}
`)
  } catch (error) {
    logError(
      "[analytics-mcp: ERROR] Error starting Artsy Analytics MCP Server:",
      error
    )
    process.exit(1)
  }
}

startServer()
