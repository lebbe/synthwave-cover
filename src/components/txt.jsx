/* eslint-disable react/prop-types */

import React, { useLayoutEffect, useState } from 'react'


import './txt.css'

function useOrientation() {
	const [orientation, setOrientation] = useState('landscape')

	useLayoutEffect(() => {
		function updateSize() {
			setOrientation(window.innerWidth > window.innerHeight ? 'landscape' : 'portrait')
		}
		window.addEventListener('resize', updateSize)
		updateSize()
		return () => window.removeEventListener('resize', updateSize)
	}, [])

	return orientation
}

function Txt(props) {
	const orientation = useOrientation()
	return (
		<div
			className="retro-txt"
			style={{
				fontFamily: props.font,
				color: props.color,
				textShadow: '0 0 8px ' + props.shadow,
				top: props.top + '%',
				fontSize: props.size + ((orientation === 'landscape') ? 'vh' : 'vw')
			}}
		>
			{props.txt}
		</div>
	)
}

export default {
	name: 'txt',
	config: {
		txt: {
			type: 'text',
			value: 'OVERLOAD'
		},
		font: {
			type: 'select',
			value: 'monoton',
			values: ['Audiowide', 'Lobster Two', 'Mr Dafoe', 'monoton', 'Pacifico' /*, 'Press Start 2P'*/]
		},
		color: {
			type: 'color',
			value: '#fcedfc'
		},
		shadow: {
			type: 'color',
			value: '#d40e95'
		},
		top: {
			type: 'number',
			value: 48,
			min: 0,
			max: 100
		},
		size: {
			type: 'number',
			value: 14,
			min: 0,
			max: 100,
			step: 0.1
		}
	},
	component: Txt
}
