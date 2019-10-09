// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

export class Node {

	public children: Node[] = []

	public constructor(public data: any) {
		// noop
	}

	public add(...items: any[]) {
		this.children.push(...items.map(x => new Node(x)))
	}

	public remove(data: any) {
		const index = this.children.findIndex(
			node => node.data === data,
		)
		if (index !== -1) {
			this.children.splice(index, 1)
		}
	}
}

export class Tree {
	public root: Node | null = null

	/**
	 * Breadth-First Traversal
	 */
	public traverseBF(callback: (node: Node) => void) {
		callback(this.root)
		traverse(this.root)
	
		function traverse({ children }: Node) {
			children.forEach(callback)
			children.forEach(traverse)
		}
	}

	/**
	 * Depth-First Traversal
	 */
	public traverseDF(callback: (node: Node) => void) {
		traverse(this.root)

		function traverse(node: Node) {
			callback(node)
			node.children.forEach(traverse)
		}
	}
}
