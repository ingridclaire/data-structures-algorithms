class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    let newNode = new Node (val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    let current = this.head;
    let previous;
    while (current.next) {
      previous = current;
      current = current.next;
    }
    current = null;
    this.tail = previous;
    this.tail.next = null;
    this.length -= 1;
    return this;
  }
}

let list = new LinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.pop();
list.pop();
list.pop();
console.log(list);