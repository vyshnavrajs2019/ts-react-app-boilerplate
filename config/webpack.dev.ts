/* eslint-disable import/no-extraneous-dependencies */
import { type WebpackConfiguration } from "webpack-dev-server";
import { merge } from "webpack-merge";

import { config as commonConfig } from "./webpack.common";

const config: WebpackConfiguration = {
	mode: "development",
	devServer: {
		open: true,
		static: "../dist",
		watchFiles: ["../public"],
	},
	devtool: "source-map",
};

export default merge([commonConfig, config]);
