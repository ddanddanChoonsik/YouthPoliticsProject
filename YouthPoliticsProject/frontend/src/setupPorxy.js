 const { createProxyMiddleware } = require('http-proxy-middleware');

 const defaultLoginUrl = process.env.REACT_APP_SPRING_URL+"member/login";

    module.exports = function(app){
        app.use(
            createProxyMiddleware(defaultLoginUrl, {
            target: 'http://localhost:9001',
            changeOrigin: true,
            }),
  );
        }
