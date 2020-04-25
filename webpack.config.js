const path = require('path')

/**
 * @type {import('webpack').Configuration}
 */

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: path.resolve(__dirname, 'src/index.tsx')
  }, // webpack 构建的起点文件
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      
    ]
  }
}