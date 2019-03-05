const path = require('path');
const webpack = require('webpack');
const src = path.resolve(__dirname, 'src');
const build = path.resolve(__dirname, 'build');

module.exports = {
    target: 'web',
    entry: src + '/app.js',
    output: {
        path: `${build}`,
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        alias: {
            "@api": path.join(src, 'core/api'),
            "@mid": path.join(src, 'core/middlewares'),
            "@gen-com": path.join(src, 'core/components'),
            "@lib": path.join(src, 'core/lib'),
        }
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: '/node_modules/',
            query: { compact: false }
        }, {
            test: /\.(scss|css)$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: "file-loader"
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jquery: "jquery",
            "window.jQuery": "jquery",
            jQuery: "jquery"
        }),
        new webpack.EnvironmentPlugin([
            'NODE_ENV',
        ]),
    ]
}
