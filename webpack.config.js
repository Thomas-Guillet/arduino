const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const plugins = [ new HtmlWebpackPlugin({ template: 'src/public/index.html'})];

// if(process.env.NODE_ENV === 'production') plugins.push(new UglifyJSPlugin());
// plugins.push(new UglifyJsPlugin());

module.exports = {
  entry: './src/public/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
  	rules: [
  		{
	  		test: /\.css$/,
	  		use: ['style-loader', 'css-loader'],
  		},
  	],
  },
  plugins,
  devServer : {
  	host: '0.0.0.0',
  	port: 8080
  }
};