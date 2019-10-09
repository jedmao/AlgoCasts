// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

import Stack = require('./stack');

export = class Queue {

	private s1 = new Stack()
	private s2 = new Stack()
	private reversed = true

	public add(...items: any[]) {
		if (!this.reversed) {
			this.swap(this.s2, this.s1)
			this.reversed = true
		}
		this.s1.push(...items)
	}

	public remove() {
		if (this.reversed) {
			this.swap(this.s1, this.s2)
			this.reversed = false
		}
		return this.s2.pop()
	}

	private swap(x: Stack, y: Stack) {
		while (x.peek()) {
			y.push(x.pop())
		}
	}

	public peek() {
		if (this.reversed) {
			this.swap(this.s1, this.s2)
			this.reversed = false
		}
		return this.s2.peek()
	}
}
