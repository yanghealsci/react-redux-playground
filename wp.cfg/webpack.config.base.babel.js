const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const {
    ProvidePlugin,
    DefinePlugin
} = webpack

const {
    CommonsChunkPlugin
} = webpack.optimize

module.exports = {
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [['env', {modules: false}], 'react'],
                        plugins: ['syntax-dynamic-import']
                    }
                }]
            },{
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name:'/images/[hash:20].[ext]'
                }
            },{
                test: /\.s[ac]ss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                     //resolve-url-loader may be chained before sass-loader if necessary
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                module: true,
                                localIdentName:'[name]__[local]__[hash:base64:10]'}
                        },
                        'sass-loader'
                    ],
                    'publicPath': '/dist/'
                })
            }]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss'],
        enforceExtension: false,
        modules  : [
            path.join(__dirname, '../src'),
            'node_modules'
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'style.css'
        }),
        new DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new CommonsChunkPlugin({
            name: 'common',
            filename: 'common.js',
            minChunks: Infinity
        }),
        new ProvidePlugin({
            React   : 'react',
            ReactDOM: 'react-dom',
            _       : 'lodash',
            PropTypes : 'prop-types'
        })
    ]
}
