// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

export = function maxChar(str: string) {
	const charMap = {}
	for (const char of str) {
		charMap[char] = (charMap[char] || 1) + 1
	}
	let [max, maxChar] = [0, '']
	Object.keys(charMap).forEach(char => {
		if (charMap[char] > max) {
			max = charMap[char]
			maxChar = char
		}
	})
	return maxChar
}
