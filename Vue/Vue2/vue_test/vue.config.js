module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
    },
    
  },
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5001',
        pathRewrite: {'^/api':''},
        ws: true,
        changeOrigin: true
      },
      '/car': {
        target: 'http://localhost:5002',
        pathRewrite: {'^/car':''},
        ws: true,
        changeOrigin: true
      },
      
    }

  }

}

