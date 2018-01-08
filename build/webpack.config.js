const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        bunlde: './main.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|gif|jpg|jepg|svg|ttf|eot|woff|woff2)$/,
                use: 'file-loader'
            }
        ]
    },
    devServer: {
        open: true,
        port: 8800,
        inline: true,
        historyApiFallback: true,
        noInfo: true,
        hot: true
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, '../src')
        },
        extensions: ['.js', '.vue', '.json']
    },
    devtool: 'eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: './index.html'
        })
    ]
};