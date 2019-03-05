const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const build = path.resolve(__dirname, 'build');
const baseConfig = require('./webpack.config.js');
const ProgressPlugin = require("webpack/lib/ProgressPlugin");


const handler = (percentage, message, ...args) => {
    // e.g. Output each progress message directly to the console:
    console.info(percentage, message, ...args);
    console.clear();
};

module.exports = {
    ...baseConfig,
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': `'development'`
        }),
        new HtmlWebpackPlugin({
            files: {
                js: [`${__dirname}/build/bundle.js`]
            },
            filename: 'index.html',
            title: 'Event Owner',
            template: `${__dirname}/public/dev.html`
        }),
        new webpack.HotModuleReplacementPlugin(),

        new ProgressPlugin(handler)
    ],
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: PUBLIC,
        historyApiFallback: true,
        stats: 'minimal',
        hot: true,
        watchOptions: {
            poll: undefined,
            aggregateTimeout: 300,
            ignored: /node_modules/
        }
    }
}
