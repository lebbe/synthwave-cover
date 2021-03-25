/* eslint-disable react/prop-types */

import React, { useState } from 'react'

import Matrix from './components/matrix'
import Sax from './components/sax'
import Stars from './components/stars'
import Sunset from './components/sunset'
import Triangle from './components/triangle'
import Txt from './components/txt'
import { replaceHash } from './utils/url'

const elements = {
	Matrix,
	Sax,
	Stars,
	Sunset,
	Triangle,
	Txt
}

function Cover(props) {
	return (<div className="container">
		{props.layers.map(layer => {
			const Layer = elements[layer.name].component
			const props = layer.props
			// eslint-disable-next-line react/jsx-key
			return (<Layer {...props} />)
		})}
	</div>)
}

function Controller(props) {
	
	const [open, setOpen] = useState(true)
	
	return (
		<details className="controller" open={open}>
			<summary className="controller-toggle" onClick={() => setOpen(!open)}>
			</summary>
			<label>
				<select value="0" onChange={props.addLayer}>
					<option value="0">Add layer</option>
					{(Object.keys(elements).map(layerKey => <option key={layerKey} value={layerKey}>{layerKey}</option>))}
				</select>
			</label>

			<div className="controller-panels">
				{props.layers.map((layer, i) => {
					const config = elements[layer.name].config
					return (
						<div className="controller-panel" key={i}>
							<div className="controller__component-title">
								{layer.name}{i}
								<button className="controller__component-title__delete-button" onClick={() => {props.removeLayer(i)}}>x</button>
							</div>
							<div className="controller__fieldset">
								{Object.keys(config).map((name, j) => {
									const { type, min, max, step } = config[name]

									return (
										<label key={j} className="controller__form-item">
											<span className="config__label">{name}</span>
											{type === 'select' ? (<select value={layer.props[name]} onChange={(e) => props.changeSetting(i, name, e.target.value)}>
												{config[name].values.map((val) => <option key={val} value={val}>{val}</option>)}
											</select>)
												: (<input
													onChange={(e) => {
														props.changeSetting(i, name, type === 'checkbox' ? e.target.checked : e.target.value)
													}}
													type={type}
													min={min}
													max={max}
													step={step}
													value={layer.props[name]} />)
											}
										</label>)

								})}
							</div>
						</div>
					)})}
			</div>
		</details>)
}


function App(props) {
	const [layers, setLayers] = useState(props.layers || [])

	function addLayer(e) {
		const name = e.target.value
		const layer = elements[name]
		const props = {}

		Object.keys(layer.config).forEach(key => props[key] = layer.config[key].value)

		setLayers([...layers, {name, props}])
	}

	function removeLayer(index) {
		setLayers(layers.filter((_, i) => i !== index))
	}

	function changeSetting(index, name, value) {
		const clone = JSON.parse(JSON.stringify(layers[index]))
		clone.props[name] = value

		setLayers([...layers.slice(0, index), clone, ...layers.slice(index + 1)])
	}

	replaceHash(layers)

	return (
		<div>
			<Cover layers={layers} />
			<Controller addLayer={addLayer} changeSetting={changeSetting} removeLayer={removeLayer} layers={layers} />
		</div>
	)
}

export default App
