const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production', //development
    entry: {
        main: './src/index.js',
        analytics: './src/analytics.js'
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: "index.html",
            title: "Webpack Test",
            template: './src/index.html'
        })
    ]
}