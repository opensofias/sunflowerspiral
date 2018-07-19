'use strict'

const drawSpiraly = arg => {
	const {
		angle, rOff = 0, pOff = 0, po2, bg, color
	} = arg
	const size = 2 ** po2
	const prev = document.querySelector ('svg')
	prev && document.body.removeChild (prev)

	let frame = elem ({
		svg: true, tag: 'svg',
		attr: {
			viewBox:
				(size ** (1 / 2) * -1) + ' ' +
				(size ** (1 / 2) * -1) + ' ' +
				(size ** (1 / 2) * 2) + ' ' +
				(size ** (1 / 2) * 2)
		}
	})
	
	const colorFunc =
		color.startsWith ('#') ? (() => color) :
		color.startsWith ('r') ? (num => rotaColor (num, Number.parseFloat (color.slice (1)), angle * 2)) :
		(() => '#000')

	let count = -1
	while (count++ < size) {
		frame.appendChild (elem ({
			svg: true, tag: 'circle',
			attr: {
				cx: pOff + Math.sqrt (count) * Math.sin (rOff + count * Math.PI / angle),
				cy: pOff + Math.sqrt (count) * Math.cos (rOff + count * Math.PI / angle),
				r: '.5',
				fill: colorFunc (count)
			}
		}))
	}

	document.body.appendChild (frame)
	return arg
}

const drawGrowSpirally = ({angle, rOff = 0, pOff = 0}) => {
	const prev = document.querySelector ('svg')
	prev && document.body.removeChild (prev)

	let frame = elem ({
		svg: true, tag: 'svg',
		attr: {viewBox: '-256 -256 512 512'}
	})
	
	document.body.appendChild (frame)

	let count = 0
	while (count++ < 2 ** 8) {
		frame.appendChild (elem ({
			svg: true, tag: 'circle',
			attr: {
				cx: count * Math.sin (count * Math.PI / phi),
				cy: count * Math.cos (count * Math.PI / phi),
				r: Math.sqrt (count),
				fill: '#000'
			}
		}))
	}
}

const phi = (1 + Math.sqrt (5)) / 2

onload = _ => drawSpiraly ()