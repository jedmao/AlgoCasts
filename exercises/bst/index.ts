// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

export = class Node {
  public left: Node;
  public right: Node;

  public constructor(public data: number) {
    // noop
  }

  public insert(data: number) {
    if (data < this.data) {
      if (this.left) {
        this.left.insert(data);
      } else {
        this.left = new Node(data);
      }
      return;
    }
    if (this.right) {
      this.right.insert(data);
    } else {
      this.right = new Node(data);
	 }
  }

  public contains(data: number) {
    return check(data < this.data ? this.left : this.right);

    function check(node: Node) {
      return node ? (node.data === data ? node : node.contains(data)) : null;
    }
  }
};
