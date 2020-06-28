const OpenBrowserPlugin = require("open-browser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    entry: {
        main: [`${__dirname}/all-tests.js`],
    },
    mode: "production",
});
