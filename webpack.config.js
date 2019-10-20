const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./dev/script.js",
	output: {
		path:path.join(__dirname, "/site"),
		filename: "bundle.js"
	},
	// mode: "development",
	module: {
		rules: [
			{
				test:/\.js$/,
				exclude: /node_modules/,
				use:{
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"]
					}
				},
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./dev/index.html"
		})
	]
};