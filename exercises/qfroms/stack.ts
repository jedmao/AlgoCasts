export = class Stack {
  private data = []

  public push(...items: any[]) {
    this.data.push(...items);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data.slice(-1)[0]
  }
}
