// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

export = class Queue {
  private data = []

  public add(...items: any[]) {
    this.data.unshift(...items);
  }

  public remove() {
    return this.data.pop();
  }

  public peek() {
    return this.data.slice(-1)[0]
  }

  public get length() {
    return this.data.length
  }
}
