const path = require('path')
const webpack = require('webpack')
const base = require('./webpack.config.base.babel')
const merge = require('webpack-merge')
const commons = require('./commons')

const {
    ProvidePlugin
} = webpack

module.exports = merge(base, {
    devtool: 'source-map',
    entry: {
        common: [...commons, 'chai', 'react-addons-test-utils', 'enzyme', 'sinon/pkg/sinon'],
        bundle: 'mocha-loader!./tests/unit/index'
    },
    output: {
        path: path.resolve(__dirname, 'tests/unit'),
        publicPath: '/'
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../tests/unit'),
        hot: true
    },
    module: {
        noParse: [
            /sinon/
        ]
    },
    plugins: [
        new ProvidePlugin({
            chai     : 'chai',
            enzyme   : 'enzyme',
            TestUtils: 'react-addons-test-utils',
            sinon    : 'sinon/pkg/sinon'
        })
    ],
    externals: {
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
    }
});
