const path = require('path')
const webpack = require('webpack')
const base = require('./webpack.config.base.babel')
const merge = require('webpack-merge')
const commons = require('./commons')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
    LoaderOptionsPlugin
} = webpack

const {
    UglifyJsPlugin
} = webpack.optimize

module.exports = merge(base, {
    entry: {
        common: commons,
        bundle: path.resolve(__dirname, '../src/index')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/'
    },
    performance: {
        hints: 'warning', // enum
        maxAssetSize: 200000, // int (in bytes),
        maxEntrypointSize: 400000, // int (in bytes)
        assetFilter: function(assetFilename) {
          // Function predicate that provides asset filenames
          return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
        }
    },
    plugins: [
        new UglifyJsPlugin(),
        new LoaderOptionsPlugin({
            minimize: true
        }),
        new HtmlWebpackPlugin({
            hash: true,
            inject:true,
            filename: path.resolve(__dirname, '../index.html'),
            template: path.resolve(__dirname, '../indexTemplate.html')
        })
    ]
})
