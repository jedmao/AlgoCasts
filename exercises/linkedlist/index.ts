// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

export class Node {
	public constructor(
		public data: any,
		public next: Node | null = null,
	) {
		// noop
	}
}

export class LinkedList {

	public constructor(public head = null) {
		// noop
	}

	public size() {
		let counter = 0
		this.forEach(() => counter++)
		return counter
	}

	public insertFirst(data: any) {
		this.head = new Node(data, this.head)
	}

	public getFirst() {
		return this.head
	}

	public getLast() {
		let prev = this.head
		let node = prev ? prev.next : null
		while (node) {
			prev = node
			node = node.next
		}
		return prev
	}

	public clear() {
		this.head = null
	}

	public removeFirst() {
		if (this.head) {
			this.head = this.head.next
		}
	}

	public removeLast() {
		let prev = this.head
		if (!prev) {
			return
		}

		let node = this.head.next
		if (!node) {
			this.head = null
			return
		}

		while (node.next) {
			prev = node
			node = node.next
		}
		prev.next = null
	}

	public insertLast(data: any) {
		const last = this.getLast()
		const node = new Node(data)
		if (last !== null) {
			last.next = node
		} else {
			this.head = node
		}
	}

	public getAt(index: number) {
		let counter = 0
		for (const node of this) {
			if (counter++ === index) {
				return node
			}
		}
		return null
	}

	public removeAt(index: number) {
		if (!this.head) {
			return
		}
		
		if (index === 0) {
			this.head = this.head.next
			return
		}
		
		const prev = this.getAt(index - 1)
		if (prev.next) {
			prev.next = prev.next.next
		}
	}

	public insertAt(data: any, index: number) {
		if (index === 0) {
			this.insertFirst(data)
			return
		}

		const prev = this.getAt(index - 1)
		if (!prev) {
			this.insertLast(data)
			return
		}
		
		prev.next = new Node(data, prev.next)
	}

	public forEach(callback: (node: Node) => void) {
		for (const node of this) {
			callback(node)
		}
	}

	public [Symbol.iterator] = function* () {
		let node = this.head
		while (node) {
			yield node
			node = node.next
		}
	}
}
