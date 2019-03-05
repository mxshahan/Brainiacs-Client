const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CompressionPlugin = require('compression-webpack-plugin');
const baseConfig = require('./webpack.config.js');
const PUBLIC = path.resolve(__dirname, 'dist');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    ...baseConfig,
    mode: 'production',
    optimization: {
        minimizer: [
          new UglifyJSPlugin({
            sourceMap: true,
            uglifyOptions: {
              compress: {
                inline: false
              }
            }
          })
        ],
        // splitChunks: {
        //     cacheGroups: {
        //         styles: {
        //             name: "styles",
        //             test: /\.(css|scss)$/,
        //             chunks: "all",
        //             enforce: true
        //         },
        //         vendor: {
        //             name: "vendor",
        //             test: /node_modules/,
        //             chunks: "initial",
        //             enforce: true
        //         }
        //     }
        // },
        runtimeChunk: false,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),

        // Minify CSS
        new webpack.LoaderOptionsPlugin({
            minimize: true,
        }),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.scss$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        }),
        new BrotliPlugin({
			asset: '[path].br[query]',
			test: /\.(js|css|html|svg)$/,
			threshold: 10240,
			minRatio: 0.8
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        })
    ]
}
