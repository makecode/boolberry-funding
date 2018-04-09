const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const devserver = require('./webpack/devserver');
const jsx = require('./webpack/jsx');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const images = require('./webpack/images');
const fonts = require('./webpack/fonts');

const PATH = {
	source: path.join(__dirname, 'source'),
	build: path.join(__dirname, 'build')
};

const common = merge([
	{
		output: {
			path: PATH.build,
			filename: 'js/[name].js'
		},

		resolve: {
			extensions: ['.js', '.jsx', '.json', '.css', '.sass'],
			alias: {
				react: path.resolve('./node_modules/react'),
				'react-dom': path.resolve('./node_modules/react-dom'),
				'prop-types': path.resolve('./node_modules/prop-types')
			}
		},

		plugins: [
			new HtmlWebpackPlugin({
				filename: 'index.html',
				template: 'app.html'
			})
  	]
	},
	jsx(),
	images(),
  fonts()
]);

module.exports = function(env) {
  if (env === 'development') {
    return merge([
			{
        devtool: 'cheap-module-source-map'
			},
			common,
			devserver(),
			sass(),
			css()
    ]);
  }

  if (env === 'production') {
    return merge([
			{
        entry: [
          './app.js'
        ]
			},
    	common,
			extractCSS(),
      uglifyJS()
    ]);
  }
};