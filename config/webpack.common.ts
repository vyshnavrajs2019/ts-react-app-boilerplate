/* eslint-disable import/no-extraneous-dependencies */
import { type WebpackConfiguration } from "webpack-dev-server";
import HTMLWebpackPlugin from "html-webpack-plugin";

export const config: WebpackConfiguration = {
	entry: "./src/index.tsx",
	output: {
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.[jt]sx?$/,
				use: "babel-loader",
				include: /src/,
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
				type: "asset/inline",
			},
		],
	},
	plugins: [
		new HTMLWebpackPlugin({
			title: "Client",
			template: "./public/index.html",
		}),
	],
	resolve: {
		extensions: [".tsx", ".ts", ".jsx", ".js"],
	},
	optimization: {
		runtimeChunk: "single",
	},
};
