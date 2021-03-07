const pathPrefix = process.env.NODE_ENV === 'production'
    ? '/next-fcs'
    : '';

// NOTE: see https://github.com/vercel/next.js/issues/7625
const withTM = require('next-transpile-modules')

module.exports = withTM({
  assetPrefix: pathPrefix,
  basePath: pathPrefix,
  env: {
    pathPrefix
  },
  config: {
    optimization: {
      minimize: false
    }
  }
})
