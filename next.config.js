const pathPrefix = process.env.NODE_ENV === 'production'
    ? '/next-fcs'
    : '';

// NOTE: see https://github.com/vercel/next.js/issues/7625
// const withTM = require('next-transpile-modules')

module.exports = {
  assetPrefix: pathPrefix,
  basePath: pathPrefix,
  env: {
    pathPrefix
  },
  webpack (config, options) {
    config.optimization.minimizer = []
    return config
  }
}
