# Artsy Analytics MCP Server POC

Model Context Protocol server providing Artsy partner analytics tools for Claude Desktop.

## Available Tools

### Core Analytics

- **get_partner_activity_stats** - Partner activity overview with pageviews and inquiries
- **get_partner_sales_stats** - Sales performance metrics and trends
- **get_partner_artworks_published_stats** - Artwork publishing analytics
- **get_partner_audience_stats** - Audience metrics and visitor counts
- **get_partner_inquiries_stats** - Inquiry volume and response analytics
- **get_complete_partner_analytics** - Comprehensive analytics dashboard
- **get_partner_modern_pageviews** - Enhanced pageview analytics with time series
- **get_partner_time_series_analytics** - Time series data for pageviews or artworks
- **get_partner_sales_time_series** - Sales analytics with revenue tracking
- **get_partner_inquiry_time_series** - Inquiry trends with response times

### Content Performance

- **get_partner_top_artworks** - Top-performing artworks by views
- **get_partner_top_content** - Top content (artworks, shows, artists, viewing rooms)

### Audience Insights

- **get_partner_visitor_demographics** - Visitor breakdowns by country, device, referral
- **custom_graphql_query** - Execute custom GraphQL queries

## Setup

- Install deps

```bash
git clone https://github.com/damassi/mcp-tests.git
cd mcp-tests
yarn install
```

- Sync GraphQL schema:

```bash
yarn sync-schema
yarn relay
```

- Build: `yarn build`
- Configure Claude Desktop MCP settings:

```bash
code /Users/<your-user-name>/Library/Application Support/Claude/claude_desktop_config.json
```

```json
{
  "mcpServers": {
    "artsy-analytics": {
      "command": "node",
      "args": ["/path/to/mcp/dist/mcp-server.js"],
      "env": {
        "METAPHYSICS_ENDPOINT": "your_endpoint",
        "USER_ID": "your_user_id",
        "X_ACCESS_TOKEN": "your_token"
      }
    }
  }
}
```

- Restart Claude Desktop

## Usage

Ask Claude questions like:

- "Show visitor demographics for pace-gallery"
- "Get sales trends for hauser-wirth over 16 weeks"
- "What are the top artworks for gagosian-gallery?"

## Development

When developing, can run

```bash
yarn build --watch
```

Then launch the `modelcontextprotocol` [inspector](https://modelcontextprotocol.io/legacy/tools/inspector):

```
npx @modelcontextprotocol/inspector
```

Make sure the setup looks like the below:

<img width="1051" height="428" alt="Image" src="https://github.com/user-attachments/assets/50c6d0d4-205f-44a6-87de-f52a61bb98a9" />
