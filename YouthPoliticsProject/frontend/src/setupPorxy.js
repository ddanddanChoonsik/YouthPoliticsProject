import React from 'react';

const setupPorxy = () => {
    const { createProxyMiddleware } = require('http-proxy-middleware');

    module.exports = function(app){
        app.use(
            createProxyMiddleware('pageIndex=1&display=1&openApiVlak=c4ef1792d2b792033d1e4126', {
            target: 'https://www.youthcenter.go.kr/opi/empList.do?',
            changeOrigin: true,
            }),
  );
};
    return (
        <div>
            {/* 테스트 */}
        </div>
    );
};

export default setupPorxy;