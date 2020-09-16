const CompressionPlugin = require("compression-webpack-plugin");
const BrotliPlugin = require("brotli-webpack-plugin");

module.exports = {
	plugins: [
		new CompressionPlugin({
			filename: "[path].gz[query]",
			algorithm: "gzip",
			test: /\.(js|css|html|svg)$/,
			threshold: 8192,
			minRatio: 0.8,
		}),
		new BrotliPlugin({
			asset: "[path].br[query]",
			test: /\.(js|css|html|svg)$/,
			threshold: 10240,
			minRatio: 0.8,
		}),
	],
};
