var path = require("path")

var webpack = require("webpack")
var config = require("./config")
const merge = require('webpack-merge')
const baseConfig = require("./webpack.base.js")
module.exports = merge(baseConfig, {
    devServer: {
        contentBase: path.join(__dirname, "../dist"),
        host: "localhost",
        port: 8888,
        watchContentBase: true,
        hot: true,
        inline: true,
        open: true,
        before: config.dev.before,
        proxy: {
            "/apis": {
                target: "http://localhost:3000",
                pathRewrite: {
                    "^/apis": "/api"
                },
                secure: false
            }
        }
    },
    devtool: false,
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})