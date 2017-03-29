var merge = require("webpack-merge");
var ExtractText = require("extract-text-webpack-plugin");
var common = require("./webpack.common");
var paths = require("./paths");
var fs = require('fs');
var gracefulFs = require('graceful-fs');
gracefulFs.gracefulify(fs);

module.exports = merge(common, {
    devtool: "cheap-module-eval-source-map",
    output: {
        path: paths.DIST_DIR,
        publicPath: "http://localhost:8080/",
        filename: "[name].js",
        chunkFilename: "[id].chunk.js"
    },

    plugins: [ new ExtractText({ filename: "[name].css" }) ],

    devServer: {
        historyApiFallback: true,
        stats: "minimal"
    }
});
