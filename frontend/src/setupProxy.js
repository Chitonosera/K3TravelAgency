const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/register',
    createProxyMiddleware({
      target: 'http://localhost:8000', // Адреса вашого віддаленого сервера
      changeOrigin: true,
    })
  );
};
