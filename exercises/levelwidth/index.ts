// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

import { Node } from '../tree'

export = function levelWidth(root: Node) {
	const widths = [1]
	traverse([root])
	return widths

	function traverse(children: Node[]) {
		const width = children.reduce(
			(width, node) => width += node.children.length,
			0,
		)

		if (width) {
			widths.push(width)
		}
		
		children.forEach(node => traverse(node.children))
	}
}
