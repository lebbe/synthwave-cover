
import pako from 'pako'
import { encode, decode } from 'base64-uint8'
import throttle from 'lodash.throttle'

/**
 * Saves a javascript object in the hash-part of the URL with replace state.
 * The javascript object is a base64 encoded representation of the gzipped
 * JSON representation of the JavaScript object.
 */
function replaceHashPure(object) {
	const json = JSON.stringify(object)
	const compressed = pako.deflate(json, { to: 'string' })
	var b64encoded = encode(compressed)
	const urlTool = document.createElement('a')
	urlTool.href = location.toString()
	if(urlTool.hash === compressed) return
	urlTool.hash = b64encoded
	try {
		history.replaceState(null, '', urlTool.href)
	} catch(e) {
		console.warn('Failed replacing URL state!', e)
	}
}

// Don't flood history.replaceState
export const replaceHash = throttle(replaceHashPure, 500)

/**
 * Assumes that the hash-part of the current URL is a base64-encoded gzipped
 * JSON representation of a javascript object. Will try to base64 decode, unzip
 * and JSON-parse the hash. Will return a default failure-state object if any of
 * this fails or hash is missing.
 * 
 * @param {*} failstateReturn 
 * @returns 
 */
export function recoverHash(failstateReturn = {}) {
	const urlTool = document.createElement('a')
	urlTool.href = location.toString()
	if(!urlTool.hash) return failstateReturn

	try {
		const hash = urlTool.hash.substr(1)
		const b64decoded = decode(hash)
		const inflated = pako.inflate(b64decoded, {to: 'string'})
		return JSON.parse(inflated)
	} catch(e) {
		return failstateReturn
	}
}
