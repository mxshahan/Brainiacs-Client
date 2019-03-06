const path = require('path');
const webpack = require('webpack');
const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');

module.exports = {
    target: 'web',
    entry: src + '/app/index.js',
    output: {
        path: `${dist}`,
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
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
