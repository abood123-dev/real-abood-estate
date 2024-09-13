// next.config.js
module.exports = {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[name]__[local]___[hash:base64:5]",
  }, 
    assetPrefix: process.env.NODE_ENV === 'production' ? '/<Real-estate-project>/' : '',
    images: {
      domains: ['th.bing.com'], // Add your allowed domains here
    },
  };
  