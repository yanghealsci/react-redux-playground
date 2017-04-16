const path = require('path')
const webpack = require('webpack')
const base = require('./webpack.config.base.babel')
const merge = require('webpack-merge')
const commons = require('./commons')

const {
    NoEmitOnErrorsPlugin,
    HotModuleReplacementPlugin,
    NamedModulesPlugin
} = webpack

const {
    UglifyJsPlugin
} = webpack.optimize

module.exports = merge(base, {
    devtool: 'cheap-eval-source-map',
    entry: {
        hotloader: [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:8000',
            'webpack/hot/only-dev-server'
        ],
        common: commons,
        bundle: path.resolve(__dirname, '../src/index.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/'
    },
    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, '..'),
        https:true,
        historyApiFallback: true,
        //proxy https request to http server
        // proxy: {
        //   '/api/**': {
        //     target: 'localhost:5000',
        //     secure: false,
        //     changeOrigin: true
        //   }
        // }
    },
    plugins: [
        new NoEmitOnErrorsPlugin(),
        new HotModuleReplacementPlugin(),
        // enable HMR globally

        new NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates

        new UglifyJsPlugin({
            sourceMap: true
        })
    ]
})
