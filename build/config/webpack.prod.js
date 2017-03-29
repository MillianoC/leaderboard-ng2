var webpack = require("webpack");
var merge = require("webpack-merge");
var ExtractText = require("extract-text-webpack-plugin");
var common = require("./webpack.common");
var paths = require("./paths");
var fs = require('fs');
var gracefulFs = require('graceful-fs');
gracefulFs.gracefulify(fs);

const ENV = process.env.NODE_ENV = process.env.ENV = "development";

module.exports = merge(common, {
    devtool: "source-map",

    output: {
        path: paths.DIST_DIR,
        filename: "[name].[hash].js",
        chunkFilename: "[id].[hash].chunk.js"
    },

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: {
                keep_fnames: true
            }
        }),
        new ExtractText({ filename: "[name].[hash].css" }),
        new webpack.DefinePlugin({
            "process.env": {
                "ENV": JSON.stringify(ENV)
            }
        })
    ]
});
