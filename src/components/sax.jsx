/* eslint-disable react/prop-types */

import React from 'react'

import './sax.css'

function Sax(props) {
	const rotateY = props.flip ? '180' : '0'
	return (
		<div className="svg-canvas" style={{top: props.top + '%', left: props.left + '%', width: props.size + '%'}} >
			<svg style={{
				transform: 'rotateY(' + rotateY + 'deg) rotate(' + props.rotate + 'deg)'
			}} version="1.0" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 5920 3010" preserveAspectRatio="xMidYMid meet">
				<g id="layer1" fill={props.color} stroke="black">
					<path d="M783 2730 l-131 -112 -161 -241 -160 -242 -12 -177 c-7 -123 -8 -187 0 -210 5 -18 24 -78 41 -134 l31 -101 149 -127 c82 -70 259 -241 394 -380 243 -250 247 -255 291 -349 44 -96 44 -96 55 -264 7 -92 16 -174 22 -180 32 -39 177 13 363 127 97 59 185 128 352 272 191 164 229 201 265 261 l41 69 -26 53 c-23 46 -30 53 -64 60 -21 3 -46 14 -55 22 -13 11 -28 14 -57 9 -37 -6 -41 -4 -72 35 -18 23 -47 48 -63 55 -17 8 -94 74 -171 148 l-139 133 36 79 c21 44 42 91 47 107 6 15 16 27 23 27 23 -1 453 -225 452 -235 -1 -5 -5 -42 -9 -81 l-7 -70 36 -25 c24 -16 36 -32 36 -48 0 -13 14 -41 31 -63 30 -37 34 -39 78 -36 42 3 46 5 49 31 7 55 53 17 83 -69 27 -75 45 -92 108 -96 43 -3 45 -2 52 30 9 43 14 47 43 34 20 -9 25 -21 31 -71 8 -68 11 -71 89 -90 60 -15 74 -5 56 39 -15 37 -8 47 27 34 20 -7 33 -25 53 -73 28 -70 48 -89 99 -93 33 -3 35 -1 44 35 15 61 67 45 87 -28 15 -54 40 -74 95 -78 34 -2 39 1 45 23 6 23 10 25 60 22 46 -3 62 -10 100 -42 34 -29 60 -41 105 -49 92 -17 92 -17 125 49 17 33 33 60 37 60 4 0 229 -77 502 -171 326 -114 499 -169 507 -163 7 5 125 148 263 318 248 307 249 309 256 366 6 51 12 63 51 101 l44 43 0 85 0 85 70 111 c39 61 70 117 70 124 0 6 -9 29 -19 50 -20 39 -48 51 -122 51 -28 0 -92 -66 -273 -282 l-90 -107 -62 6 c-58 5 -63 4 -75 -18 -7 -13 -16 -46 -19 -74 -5 -46 -8 -51 -38 -61 -48 -15 -61 -33 -73 -99 -11 -63 -19 -72 -101 -131 l-37 -26 -203 108 c-112 59 -396 228 -633 374 -376 232 -491 297 -910 515 -479 248 -480 249 -747 437 -148 103 -280 194 -295 202 -16 7 -131 57 -258 109 l-230 96 -225 6 -225 6 -132 -111z m470 -776 c29 -15 131 -62 227 -106 96 -43 179 -83 183 -87 13 -13 -26 -78 -81 -140 l-48 -54 -135 90 c-74 49 -178 113 -231 142 -93 50 -98 54 -98 86 0 25 7 38 33 58 29 22 44 28 90 36 4 0 31 -11 60 -25z"/>
				</g>
			</svg>
		</div>
	)
}

export default {
	name: 'sax',
	config: {
		color: {
			type: 'color',
			value: '#ffc800'
		},
		size: {
			type: 'number',
			value: '70',
			min: '0',
			max: '100'
		},
		flip: {
			type: 'checkbox',
			value: false
		},
		rotate: {
			type: 'number',
			value: 0
		},
		top: {
			type: 'number',
			value: 0,
			min: 0
		},
		left: {
			type: 'number',
			value: 0,
			min: -5
		}
	},
	component: Sax
}
