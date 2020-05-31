const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		theme: ['./src/js/theme.js', './src/scss/theme.scss'],
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].min.js'
	},
	devtool: 'source-map',
	module: {
		rules: [{
				enforce: 'pre',
				exclude: /node_modules/,
				test: /\.jsx$/,
				loader: 'eslint-loader'
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.s?css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{ loader: 'css-loader' },
					{ loader: 'resolve-url-loader' },
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				loader: 'url-loader',
			},
			{
				test: /\.(png|svg|jpe?g|gif)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'img',
					publicPath: '../img'
				},
			},
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/[name].min.css'
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			inject: true,
			template: './src/index.html'
		}),
		new CopyWebpackPlugin([
			{ from: './src/img', to: 'img' }
		]),
	]
};
