const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    theme: ['./src/js/theme.js', './src/scss/theme.scss'],
  },
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: '[name].min.js'
  },
  module: {
    rules: [
      {
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
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.(svg|eot|ttf|woff|woff2)?$/,
        loader: 'url-loader',
      }
    ]
  },
  plugins: [
	new MiniCssExtractPlugin({ filename: '../css/[name].min.css' }),
	new HtmlWebpackPlugin({
		filename: 'index.html',
		inject: 'body',
		template: './src/index.html',
	}),
  ]
};
