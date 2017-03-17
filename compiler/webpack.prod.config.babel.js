import commons from './commons'
import merge from 'deepmerge'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import ExtractTextPlugin from 'extract-text-webpack-plugin';

const { entries, module: { rules } } = commons

rules.push(
	{
		test: /\.scss$/,
		use: ExtractTextPlugin.extract({
			fallback: 'style-loader',
			use: ['css-loader', 'sass-loader']
		})
	}
)

const production = {
	devtool: 'cheap-source-map',
	plugins: [
        new webpack.optimize.AggressiveSplittingPlugin({
        	minSize: 30000,
        	maxSize: 50000
        }),
	    new webpack.NoEmitOnErrorsPlugin(),
		new webpack.optimize.UglifyJsPlugin({ minimize: true, mangle: false, sourcemap: false })
	]
}

export default merge(production, commons)