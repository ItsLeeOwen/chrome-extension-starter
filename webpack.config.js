const WriteFilePlugin = require("write-file-webpack-plugin"),
  WebpackConfig = require("webpack-config-starter")

module.exports = WebpackConfig({
  plugins: [
    new WriteFilePlugin(),
  ],
})

