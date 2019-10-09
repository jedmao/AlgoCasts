// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

import { LinkedList } from '../linkedlist'

export = function circular(list: LinkedList) {
	const first = list.getFirst()
	for (const node of list) {
		if (node.next === first) {
			return true
		}
	}
	return false;
}
