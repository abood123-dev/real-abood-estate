// next.config.js
module.exports = {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/<Real-estate-project>/' : '',
    images: {
      domains: ['th.bing.com'], // Add your allowed domains here
    },
  };
  