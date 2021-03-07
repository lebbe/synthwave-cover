/* eslint-disable react/prop-types */

import React from 'react'

import './sunset.css'

function Sunset(props) {
	return (
		<div className="retro-sun" style={{
			width: props.size + '%',
			height: props.size + '%',
			top: props.top + '%',
			left: props.left + '%',
			backgroundColor: props.background + '66',
			boxShadow: '0px 0px 115px 0px ' + props.background
		}}>
			{new Array(10).fill(<div style={{
				background: 'radial-gradient(ellipse at center, ' + props.color_1 + ' 0%, ' + props.color_2 + ' 100%)'
			}}
			className="retro-sun__stripe"></div>)}
		</div>
	)
}


export default {
	name: 'sunset',
	config: {
		size: {
			type: 'number',
			value: 55,
			min: 0,
			max: 100
		},
		top: {
			type: 'number',
			value: 12.7,
			min: 0,
			max: 100,
			step: 0.1
		},
		left: {
			type: 'number',
			value: 22.7,
			min: 0,
			max: 100,
			step: 0.1
		},
		background: {
			type: 'color',
			value: '#74003c'
		},
		color_1: {
			type: 'color',
			value: '#f7891a'
		},
		color_2: {
			type: 'color',
			value: '#fdfb8a'
		}
	},
	component: Sunset
}
