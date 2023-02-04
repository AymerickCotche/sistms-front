const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/proxy',
    createProxyMiddleware({
      target: 'https://apifeed.sellsy.com',
      changeOrigin: true,
      pathRewrite: {
        '/proxy': '/',
      },
    })
  );
};