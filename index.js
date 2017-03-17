import express from 'express'
import webpackMiddleware from 'webpack-dev-middleware'
import config from './compiler/webpack.dev.config.babel'
import eq from 'lodash/eq'
import path from 'path'
import webpack from 'webpack'
import webpackHotMiddleware from 'webpack-hot-middleware'

const isDeveloping = !eq(process.env.NODE_ENV, 'production')

const app = express()

const port = isDeveloping ? 3000 : process.env.PORT

if(isDeveloping) {
	const compiler = webpack(config)
	const middleware = webpackMiddleware(compiler, {
		hot: true,
		publicPath: config.output.publicPath,
		stats: { colors: true }
	})
	app.use(middleware)
	app.use(webpackHotMiddleware(compiler))
	app.get('*', (req, res) => {
		res.write(middleware.fileSystem.readFileSync(path.join(__dirname, './dist/index.html')))
		res.end()
	})
}

app.listen(port, (err) => {
	if(err) {
		console.log(err)
	}
	console.info(`Running in localhost:%s`, port)
})