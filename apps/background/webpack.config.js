import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
	entry: {
		background: './src/index.ts',
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, '../bookify-ui/public/scripts'),
	},
};
// module.exports = {
// 	entry: './src/index.ts',
// 	module: {
// 		rules: [
// 			{
// 				test: /\.tsx?$/,
// 				use: 'ts-loader',
// 				exclude: /node_modules/,
// 			},
// 		],
// 	},
// 	resolve: {
// 		extensions: ['.tsx', '.ts', '.js'],
// 	},
// 	output: {
// 		filename: 'bundle.js',
// 		path: path.resolve(__dirname, 'dist'),
// 	},
// };