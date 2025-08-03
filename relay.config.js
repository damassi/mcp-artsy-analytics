module.exports = {
  src: "./src",
  schema: "./data/schema.graphql",
  language: "typescript",
  artifactDirectory: "./src/z__generated__",
  exclude: [
    "**/node_modules/**",
    "**/__generated__/**"
  ]
}
