const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './index.js',
        analytics: './analytics.js'
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    devServer: {
        port: 316
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: "index.html",
            title: "Webpack Test",
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/assets/favicon.ico'),
                    to: path.resolve(__dirname, 'dist')
                }
            ]
        })
    ],
    resolve: {
        extensions: ['.js', '.json', '.png'],
        alias: {
            '@models': path.resolve(__dirname, 'src/models'),
            '@': path.resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    esModule: false
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
    }
}