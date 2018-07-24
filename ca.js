'use strict'

const fibCache = [1, 1]

const fib = x =>
	x in fibCache ? fibCache [x] :
	fibCache [x] = fib (x - 1) + fib (x - 2)

const log = (num, base) =>
	Math.log (num) / (
		base === undefined ? 1 :
		Math.log (base)
	)

const sunflowerNeighbors = num => 
	['floor', 'ceil'].map (
		f_c => num - fib (Math[f_c] (
			log (num ** .5, phi) + 2
		)
	))

const lookup = (lut, pos) => {
	/*console.log (
		pos,
		pos [0] + pos [1] * 2,
		(lut >> (pos [0] + pos [1] * 2)) % 2
	)*/
	return (lut >> (pos [0] + pos [1] * 2)) % 2
}

const sunflowerCa = (size, lut) => {
	const result = [0]
	let count = 1
	do {
		result [count] = lookup (
			lut, sunflowerNeighbors (count).map (
				pos => result [Math.max (pos, 0)]
			)
		)
	} while (++ count < size)
	return result
}

