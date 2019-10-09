// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


const fib = memoize((n: number) => {
	return n < 2 ? n : fib(n - 1) + fib(n - 2)
})
export = fib

// const cache = {}
// function prev(n: number) {
// 	return cache[n] || (cache[n] = fib(n))
// }

function memoize<T extends (...args: any[]) => any>(fn: T) {
	const cache: Record<string, ReturnType<T>> = {}
	return ((...args: Parameters<T>) => {
		const key = args.toString()
		return cache[key] || (cache[key] = fn(...args))
	}) as T
}