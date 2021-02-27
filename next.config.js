const pathPrefix = process.env.NODE_ENV === 'production'
    ? '/next-fcs'
    : '';

// NOTE: see https://github.com/vercel/next.js/issues/7625
const withTM = require('next-transpile-modules')(['fcs', 'react', 'next']);
 
module.exports = withTM({
  assetPrefix: pathPrefix,
  basePath: pathPrefix,
  env: {
    pathPrefix,
  },
  webpack: (config, {
    isServer,
    defaultLoaders
  }) => {
    const originalEntry = config.entry;
    config.entry = async() => {
      const entries = await originalEntry();

      if (
        entries['main.js'] &&
        !entries['main.js'].includes('./polyfills.js')
      ) {
        entries['main.js'].unshift('./polyfills.js');
      }

      return entries
    }
    return config
  }
})
