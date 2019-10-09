// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

export = class Queue {

	private arr = []

	public add(...items: any[]) {
		this.arr.unshift(...items)
	}

	public remove() {
		return this.arr.pop()
	}
}
