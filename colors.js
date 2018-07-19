const rotaColor = (num, factor, angle) => {
	return '#' + 
	hex((Math.sin (num * tau * angle * factor) + 1) / 2) +
	hex((Math.sin ((num * tau * angle * factor) + tau * 1 / 3) + 1) / 2) +
	hex((Math.sin ((num * tau * angle * factor) + tau * 2 / 3) + 1) / 2)
}

const hex = num => Math.floor(num * 255).toString (16).padStart (2, '0')