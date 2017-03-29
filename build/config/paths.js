var path = require("path");

module.exports = {
    SOURCE_DIR: path.resolve(__dirname, "../../src"),
    DIST_DIR: path.resolve(__dirname, "../../dist"),
    TSCONFIG: path.resolve(__dirname, "../../tsconfig.json"),
    THEME_DIR: path.resolve(__dirname, "../../src/theme"),
    ASSETS_DIR: path.resolve(__dirname, "../../src/assets"),
    VENDOR: path.resolve(__dirname, "../../src/vendor.ts")
}
