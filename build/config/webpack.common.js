var webpack = require("webpack");
var HTMLWebpack = require("html-webpack-plugin");
var ExtractText = require("extract-text-webpack-plugin");
var Copy = require("copy-webpack-plugin");
var paths = require("./paths");
var path = require("path");

module.exports = {
    entry: {
        app: path.resolve(paths.SOURCE_DIR, "main.ts"),
        vendor: path.resolve(paths.SOURCE_DIR, "vendor.ts"),
        polyfill: path.resolve(paths.SOURCE_DIR, "polyfill.ts")
    },

    resolve: {
        extensions: [
            ".ts",
            ".js",
            ".css",
            ".html",
            ".scss"
        ]
    },

    module: {
        rules: [
            { test: /\.ts$/, use: [ "awesome-typescript-loader", "angular2-template-loader" ] },
            { test: /\.html$/, use: [ "html-loader" ] },
            { test: /\.(png|jpe?g|gif|svg|ico)$/, use: [ "file-loader?name=assets/img/[name].[hash].[ext]" ] },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: [ "file-loader?name=assets/fonts/[name].[hash].[ext]" ] },
            { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, use: [ "file-loader?name=assets/fonts/[name].[hash].[ext]" ] },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: [ "file-loader?name=assets/fonts/[name].[hash].[ext]" ] },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: [ "file-loader?name=assets/fonts/[name].[hash].[ext]" ] },
            { test: /\.css$/, include: [ paths.SOURCE_DIR ], use: [ "raw-loader" ] },
            { test: /\.scss$/, include: [ paths.SOURCE_DIR ], use: [ "raw-loader", `sass-loader?data=@import 'theme';&includePaths[]=${paths.THEME_DIR}` ] },
            { test: /\.css$/, exclude: [ paths.SOURCE_DIR ], use: ExtractText.extract({ fallback: "style-loader", use: "css-loader" }) },
            { test: /\.scss$/, exclude: [ paths.SOURCE_DIR ], use: ExtractText.extract({ fallback: "style-loader", use: [ "css-loader", "sass-loader" ] }) },
        ]
    },

    plugins: [
        new ExtractText({ filename: "[name].[hash].css" }),
        new webpack.optimize.CommonsChunkPlugin({
            name: [ "app", "vendor", "polyfill"]
        }),
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            __dirname
        ),
        new HTMLWebpack({
            template: paths.SOURCE_DIR + "/index.html"
        })
    ]
}
