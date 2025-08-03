---

Default to using Bun instead of Node.js.

- Use `bun <file>` instead of `node <file>` or `ts-node <file>`
- Use `bun test` instead of `jest` or `vitest`
- Use `bun build <file.html|file.ts|file.css>` instead of `webpack` or `esbuild`
- Use `bun install` instead of `npm install` or `yarn install` or `pnpm install`
- Use `bun run <script>` instead of `npm run <script>` or `yarn run <script>` or `pnpm run <script>`
- Bun automatically loads .env, so don't use dotenv.

## APIs

- `Bun.serve()` supports WebSockets, HTTPS, and routes. Don't use `express`.
- `bun:sqlite` for SQLite. Don't use `better-sqlite3`.
- `Bun.redis` for Redis. Don't use `ioredis`.
- `Bun.sql` for Postgres. Don't use `pg` or `postgres.js`.
- `WebSocket` is built-in. Don't use `ws`.
- Prefer `Bun.file` over `node:fs`'s readFile/writeFile
- Bun.$`ls` instead of execa.

## Testing

Use `bun test` to run tests.

```ts#index.test.ts
import { test, expect } from "bun:test";

test("hello world", () => {
  expect(1).toBe(1);
});
```

## Frontend

Use HTML imports with `Bun.serve()`. Don't use `vite`. HTML imports fully support React, CSS, Tailwind.

Server:

```ts#index.ts
import index from "./index.html"

Bun.serve({
  routes: {
    "/": index,
    "/api/users/:id": {
      GET: (req) => {
        return new Response(JSON.stringify({ id: req.params.id }));
      },
    },
  },
  // optional websocket support
  websocket: {
    open: (ws) => {
      ws.send("Hello, world!");
    },
    message: (ws, message) => {
      ws.send(message);
    },
    close: (ws) => {
      // handle close
    }
  },
  development: {
    hmr: true,
    console: true,
  }
})
```

HTML files can import .tsx, .jsx or .js files directly and Bun's bundler will transpile & bundle automatically. `<link>` tags can point to stylesheets and Bun's CSS bundler will bundle.

```html#index.html
<html>
  <body>
    <h1>Hello, world!</h1>
    <script type="module" src="./frontend.tsx"></script>
  </body>
</html>
```

With the following `frontend.tsx`:

```tsx#frontend.tsx
import React from "react";

// import .css files directly and it works
import './index.css';

import { createRoot } from "react-dom/client";

const root = createRoot(document.body);

export default function Frontend() {
  return <h1>Hello, world!</h1>;
}

root.render(<Frontend />);
```

Then, run index.ts

```sh
bun --hot ./index.ts
```

For more information, read the Bun API docs in `node_modules/bun-types/docs/**.md`.

# Artsy Analytics MCP Server Project

This is a Model Context Protocol (MCP) server that provides analytics tools for Artsy's Metaphysics GraphQL API, designed to work with Claude Desktop.

## Project Architecture

### Core Technologies
- **Runtime**: Bun (not Node.js)
- **GraphQL Client**: urql (via executeQuery utility function)
- **Type Safety**: GraphQL Code Generator with TypeScript
- **Protocol**: Model Context Protocol (MCP) for Claude Desktop integration

### Key Files & Structure
- `src/mcp-server.ts` - Main MCP server entry point
- `src/tools/` - Analytics tools (14 tools total)
- `src/utils/graphql.ts` - GraphQL client setup with urql
- `src/generated/` - Auto-generated GraphQL types
- `data/schema.graphql` - Local copy of Metaphysics GraphQL schema

### GraphQL Implementation
**ALWAYS use the standardized GraphQL pattern:**

```typescript
import { gql } from "@urql/core"
import { executeQuery } from "utils/graphql" 
import { YourQueryType } from "generated/graphql"

const query = gql`
  query yourQuery($param: String!) {
    # GraphQL query here
  }
`

const data = await executeQuery<YourQueryType>(query, { param })
```

**NEVER use vanilla fetch() for GraphQL requests** - always use the `executeQuery` utility function which handles:
- urql client configuration
- Proper headers (X-USER-ID, X-ACCESS-TOKEN, etc.)
- Error handling
- Type safety

### Import Rules
- **NO relative imports**: Use `import { x } from "utils/graphql"` not `import { x } from "../utils/graphql"`
- **Generated types**: `import { Type } from "generated/graphql"`
- **Utilities**: `import { fn } from "utils/moduleName"`

### MCP Tools Pattern
All analytics tools follow this pattern:
1. Use Zod schemas for input validation
2. Use gql template literals for queries
3. Use executeQuery() for GraphQL execution
4. Return MCP-compatible response format with content array

### GraphQL Code Generation
- Run `bun gql` to regenerate types from schema
- Queries use gql template literals for type generation
- Generated types are in `src/generated/graphql.ts`
- Always import and use proper types instead of `any` or `unknown`

### Environment Variables
- `METAPHYSICS_ENDPOINT` - Artsy's GraphQL API endpoint
- `USER_ID` - Artsy user ID for authentication
- `X_ACCESS_TOKEN` - Artsy API access token

### Commands
- `bun dev` - Development server with watch mode
- `bun start` - Production server
- `bun gql` - Regenerate GraphQL types
- `bun type-check` - TypeScript validation
