import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  overwrite: true,
  schema: "data/schema.graphql",
  documents: ["src/**/*.ts{,x}"],
  generates: {
    "src/generated/introspection.json": {
      plugins: ["urql-introspection"],
    },
    "src/generated/schema.graphql": {
      plugins: ["schema-ast"],
    },
    "src/generated/graphql.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-urql"],
      config: {
        withHooks: false,
        dedupeOperationSuffix: true,
      },
    },
  },
}

export default config
