// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      
    },
    
  },
  // 关闭语法检查
  lintOnSave: false,
  //开启单个代理服务器 代理地址为发送数据的目的地
  // devServer: {
  //   proxy: 'http://localhost:5001'
  // }
  //开启多个代理服务器 因为有前缀所以不会受public下的文件影响
  // devServer: {
  //   proxy: {
  //     // 代理服务器前缀(端口后面)判断是否使用代理
  //     '/api': {
  //       target: 'http://localhost:5001',
  //       // 代理服务器发送请求至目标服务器也是带着api前缀的 所以最终请求地址为/api/students 404
  //       pathRewrite: {'^/api':''},
  //       ws: true, //用于支持websocket
  //       changeOrigin: true //是否告知自己的端口号 true为代理服务器和目标服务器端口号相同 false为代理服务器和当前服务器端口号相同
  //     },
  //     '/demo': {
  //       target: 'http://localhost:5002',
  //       // 代理服务器发送请求至目标服务器也是带着api前缀的 所以最终请求地址为/api/students 404
  //       pathRewrite: {'^/demo':''},
  //       ws: true, //用于支持websocket
  //       changeOrigin: true //是否告知自己的端口号 true为代理服务器和目标服务器端口号相同 false为代理服务器和当前服务器端口号相同
  //     },
      
  //   }
  // }

}
