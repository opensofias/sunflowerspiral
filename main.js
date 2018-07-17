

const drawSpiraly = ({
	angle, rOff = 0, pOff = 0, size = 2 ** 8
}) => {
	const prev = document.querySelector ('svg')
	prev && document.body.removeChild (prev)

	let frame = elem ({
		svg: true, tag: 'svg',
		attr: {
			viewBox:
				(size ** (1/2) * -1) + ' ' +
				(size ** (1/2) * -1) + ' ' +
				(size ** (1/2) * 2) + ' ' +
				(size ** (1/2) * 2)
		}
	})
	
	document.body.appendChild (frame)

	let count = -1
	while (count++ < size) {
		frame.appendChild (elem ({
			svg: true, tag: 'circle',
			attr: {
				cx: pOff + Math.sqrt (count) * Math.sin (rOff + count * Math.PI / angle),
				cy: pOff + Math.sqrt (count) * Math.cos (rOff + count * Math.PI / angle),
				r: '.5',
				fill: '#000'
			}
		}))
	}
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

const phi = (1 + Math.sqrt (5)) / 4

drawSpiraly ({angle: phi, size: 2 ** 12})