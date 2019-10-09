// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

export = function reverse(str: string) {
	const chars = str.split('')
	const len = chars.length
	for (let i = 0; i < len / 2; i++) {
		const [y] = chars.splice(len - i, 1)
		const [x] = chars.splice(i, 1, y)
		chars.splice(len - i, 0, x)
	}
	return chars.join('')
};
