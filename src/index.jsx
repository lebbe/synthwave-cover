import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import { recoverHash } from './utils/url.js'




const layers = recoverHash([])

ReactDOM.render(
	<React.StrictMode>
		<App layers={layers} />
	</React.StrictMode>,
	document.getElementById('synthwaveCover'),
)

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
	import.meta.hot.accept()
}
