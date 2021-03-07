/* eslint-disable react/prop-types */

import React from 'react'

import seedrandom from 'seedrandom'


import './stars.css'

function Stars(props) {
	const rng = seedrandom(props.seed)
	const stars = []
	const number = parseInt(props.Number)
	for(let i = 0; i < number; i++) {
		stars.push(<div className="retro-star" style={{bottom: parseInt(rng() * 100) + '%', left: parseInt(rng() * 100) + '%'}}></div>)
	}
	return (
		<div className="retro-stars" style={{height: props.height + '%'}}>{stars}</div>
	)
}

export default {
	name: 'stars',
	config: {
		Number: {
			type: 'number',
			value: 10,
			min: 0,
			max: 50
		},
		seed: {
			type: 'text',
			value: 'seed'
		},
		height: {
			type: 'number',
			value: 75,
			min: 0,
			max: 100
		}
	},
	component: Stars
}
