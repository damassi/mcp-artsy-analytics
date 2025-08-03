// eslint-disable-next-line no-undef
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: { node: "current" },
        modules: "commonjs",
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "babel-plugin-relay",
      {
        artifactDirectory: "./src/z__generated__",
        schema: "./data/schema.graphql",
      },
    ],
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".js", ".ts", ".graphql"],
        alias: {
          z__generated__: "./z__generated__",
        },
      },
    ],
  ],
}
