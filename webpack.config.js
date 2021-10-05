const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
        /*loaders: [
            { exclude: ["node_modules"], test: /\.jsx?$/ },
            { loader: "style-loader!css-loader", test: /\.css$/ },
            { loader: "url-loader", test: /\.gif$/ },
            { loader: "file-loader", test: /\.(ttf|eot|svg)$/ },
        ],*/
    },
    resolve: {
        extensions: ["", ".js", "jsx"],
        modules: ["node_modules", "./modules"],
    },
};
