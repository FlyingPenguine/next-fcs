const pathPrefix = process.env.NODE_ENV === 'production' ? '/test-fcs' : ''

module.exports = {
  assetPrefix: pathPrefix,
  env: {
    pathPrefix
  }
}