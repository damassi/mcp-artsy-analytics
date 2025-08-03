module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['babel-plugin-relay', {
      artifactDirectory: './src/z__generated__',
      schema: './data/schema.graphql',
    }]
  ]
}
