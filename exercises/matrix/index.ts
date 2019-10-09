// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

export = function matrix(n: number) {
	const rows = new Array(n).fill(0).map(() => new Array(n).fill(0))
	let [x, y] = [0, 0]
	let ops = [
		() => { if (++x === n || rows[y][x]) { x--; y++; next = ops[1]; }},
		() => { if (++y === n || rows[y][x]) { y--; x--; next = ops[2]; }},
		() => { if (--x < 0 || rows[y][x]) { x++; y--; next = ops[3]; }},
		() => { if (--y < 0 || rows[y][x]) { y++; x++; next = ops[0]; }},
	]
	let [next] = ops
	for (let i = 1, last = n ** 2; i <= last; i++) {
		rows[y][x] = i;
		next()
	}
	return rows
};