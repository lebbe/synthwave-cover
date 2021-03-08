/* eslint-disable react/prop-types */

import React from 'react'

import Matrix from './components/matrix'
import Sax from './components/sax'
import Stars from './components/stars'
import Sunset from './components/sunset'
import Triangle from './components/triangle'
import Txt from './components/txt'

const layers = {
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
			const Layer = layers[layer.name].component
			const props = layer.props
			// eslint-disable-next-line react/jsx-key
			return (<Layer {...props} />)
		})}
	</div>)
}

function Controls(props) {
	// TODO state hidden/not hidden
	return (
		<div className="controller">
			<label>
				<select value="0" onChange={props.addLayer}>
					<option value="0">Add layer</option>
					{(Object.keys(layers).map(layerKey => <option key={layerKey} value={layerKey}>{layerKey}</option>))}
				</select>
			</label>

			<div className="controller-panels">
				{props.layers.map((layer, i) => {
					const config = layers[layer.name].config
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
		</div>)
}


class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {layers: []}
		this.addLayer = this.addLayer.bind(this)
		this.removeLayer = this.removeLayer.bind(this)
		this.changeSetting = this.changeSetting.bind(this)
	}

	addLayer(e) {
		const name = e.target.value
		const layer = layers[name]
		const props = {}

		Object.keys(layer.config).forEach(key => props[key] = layer.config[key].value)

		this.setState({
			layers: [...this.state.layers, {name, props}]
		})
	}

	removeLayer(index) {
		this.setState({
			layers: this.state.layers.filter((_, i) => i !== index)
		})
	}

	changeSetting(index, name, value) {
		const clone = JSON.parse(JSON.stringify(this.state.layers[index]))
		clone.props[name] = value

		this.setState({
			layers: [...this.state.layers.slice(0, index), clone, ...this.state.layers.slice(index + 1)]
		})
	}

	render() {
		return (
			<div>
				<Cover layers={this.state.layers} />
				<Controls addLayer={this.addLayer} changeSetting={this.changeSetting} removeLayer={this.removeLayer} layers={this.state.layers} />
			</div>
		)
	}
}

export default App
