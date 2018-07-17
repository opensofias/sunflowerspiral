'use strict'

const elem = ({
		tag = 'div',
		attr = {},
		mixin = {},
		content = [],
		svg = false
	}) => {
		const el = svg ?
			document.createElementNS ('http://www.w3.org/2000/svg', tag) :
			document.createElement (tag)
		for (const name in attr) {
			typeof [name] == 'boolean' ?
				attr [name] && el.setAttribute(name, name) :
				el.setAttribute(name, attr[name])
		}
		({
			string () {el.innerText = content},
			number: ()=> el.innerText = content.toString(),
			undefined: ()=> undefined,
			object: ()=> content instanceof Array ?
				content.forEach(contEl => el.appendChild(contEl)) :
				el.appendChild(content)
		}) [typeof content] ()

		return Object.assign (el, mixin)
	}

const dynElem = {
	set ({attr = {}, mixin = {}}) {
		
	}
}

const sel = selector => document.querySelector (selector)
const selAll = selector => document.querySelectorAll (selector)