import React, { Component } from 'react'
import { render } from 'react-dom'
import Test from './containers/Test'
import eq from 'lodash/eq'

const app = document.getElementById('app')

render(<Test />, app)

if(eq(process.env.NODE_ENV, 'development')) {
	if(module.hot) {
		module.hot.accept()
	}	
}
