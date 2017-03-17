import commons from './commons'
import merge from 'deepmerge'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const { entries, module: { rules } } = commons

rules.push(
	{
		test: /\.scss$/,
		use: ['style-loader', 'css-loader', 'sass-loader']
	}
)

const development = {
	devtool: 'source-map',
	entry: {
		main: [
			'react-hot-loader/patch',
			'webpack-hot-middleware/client'
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		// enable HMR globally
		new HtmlWebpackPlugin({
			title: 'App',
			template: './templates/index.html',
			filename: 'index.html'
		}),

		new webpack.NamedModulesPlugin(),
	]
}

export default merge(development, commons)