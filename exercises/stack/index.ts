// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

export = class Stack {
	private data = []

	public push(...items: any[]) {
		this.data.push(...items)
	}

	public pop() {
		return this.data.pop()
	}

	public peek() {
		return this.data.slice(-1)[0]
	}

	public get length() {
		return this.data.length
	}
}
