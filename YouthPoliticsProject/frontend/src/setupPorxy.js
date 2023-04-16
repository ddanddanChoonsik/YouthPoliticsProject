 const { createProxyMiddleware } = require('http-proxy-middleware');

    module.exports = function(app){
        app.use(
            createProxyMiddleware('/api', {
            target: 'https://www.youthcenter.go.kr/opi/empList.do',
            changeOrigin: true,
            }),
  );
        }
