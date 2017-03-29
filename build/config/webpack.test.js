var webpack = require('webpack');
var path = require("path");
var paths = require("./paths");

module.exports = {
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loaders: [ "awesome-typescript-loader?tsconfig=" + paths.TSCONFIG, "angular2-template-loader" ] },
            { test: /\.html$/, loaders: ['html'] },
            { test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, loaders: ['null'] },
            { test: /\.css$/, include: path.resolve(paths.SOURCE_DIR, "css"), loaders: ['null'] },
            { test: /\.css$/, exclude: path.resolve(paths.SOURCE_DIR, "css"), loaders: ['raw'] }
        ]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            path.resolve(paths.SOURCE_DIR),
            {}
        )
    ]
}
