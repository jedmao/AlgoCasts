// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

import { LinkedList } from '../linkedlist/index'

export = function midpoint(list: LinkedList) {
	let slow = list.head
	let fast = list.head
	while (fast = fast.next && fast.next.next) {
		slow = slow.next
	}
	return slow
}
