const pathPrefix = process.env.NODE_ENV === 'production'
    ? '/next-fcs'
    : '';

module.exports = {
  assetPrefix: pathPrefix,
  basePath: pathPrefix,
  env: {
    pathPrefix,
  },
};