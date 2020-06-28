const OpenBrowserPlugin = require("open-browser-webpack-plugin");

const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist",
    },
    plugins: [new OpenBrowserPlugin({ url: "./dist/index.html" })],
    watch: true,
});
