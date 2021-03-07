/* eslint-disable react/prop-types */

import React from 'react'

import './triangle.css'

function Triangle(props) {
	return (
		<div className="retro-triangle svg-canvas"  style={{top: props.top + '%', left: props.left + '%', width: props.size + '%'}}>
			<svg width='100%' height='100%' viewBox="0 0 100 100">
				<defs>
					<linearGradient id="Gradient1" x1="0" x2="0" y1="0" y2="1">
						<stop offset="0%" stopColor={props.gradient1_from}/>
						<stop offset="100%" stopColor={props.gradient1_to}/>
					</linearGradient>
					<linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
						<stop offset="0%" stopColor={props.gradient2_from}/>
						<stop offset="100%" stopColor={props.gradient2_to}/>
					</linearGradient>
				</defs>
				<polygon points="50,26 20,78.7 80,78.7" className="triangle" fill="url(#Gradient1)" />
				<polygon points="50,31 23,76.7 77,76.7" className="triangle" fill="url(#Gradient2)" />
			</svg>
		</div>
	)
}

export default {
	name: 'triangle',
	config: {
		gradient1_from: {
			type: 'color',
			value: '#63013a'
		},
		gradient1_to: {
			type: 'color',
			value: '#8f257d'
		},
		gradient2_from: {
			type: 'color',
			value: '#812274'
		},
		gradient2_to: {
			type: 'color',
			value: '#d8f6fc'
		},
		size: {
			type: 'number',
			value: '100',
			min: '0',
			max: '100'
		},
		top: {
			type: 'number',
			value: 0,
			min: -50
		},
		left: {
			type: 'number',
			value: 0,
			min: -50
		}
	},
	component: Triangle
}
