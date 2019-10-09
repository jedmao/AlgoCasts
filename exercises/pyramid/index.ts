// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

export = function pyramid(n: number) {
	const width = n + (n - 1)
	for (let i = 1; i <= n; i++) {
		const bricks = '#'.repeat(i + (i - 1));
		const spaces = ' '.repeat((width - bricks.length) / 2);
		console.log(spaces + bricks + spaces)
	}
};
