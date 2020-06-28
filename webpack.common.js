const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        main: [
            `${__dirname}/src/app.js`,
            `${__dirname}/src/vendor.js`,
            `${__dirname}/src/services.js`,
        ],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        babelrc: true,
                    },
                },
            },
        ],
    },
    plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin()],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
};
