import webpack from 'webpack'
import path, { resolve } from 'path'

const entries = {
	vendor: [
		'd3',
		'lodash',
		'react', 
		'react-dom', 
		'redux', 
		'react-redux',
		'react-router',
		'react-router-redux'
	],	
	main: [
		'./src/index.js'
	]
}

const rules = [
	{
		test: /\.js$/,
		use: ['babel-loader'],
		exclude: /node_modules/
	}
]

const output = {
	path: resolve(__dirname, '../dist'),
	filename: '[chunkhash].js',
	publicPath: '/'
}

const commons = {
	devtool: '',
	entry: entries,
	output,
	module:{
		rules
	},
	plugins: []
}

export default commons