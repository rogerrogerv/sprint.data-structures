function Node(value) {
  this.next = null;
  this.value = value;
}

class LinkedList {
  constructor(headValue) {
    if (headValue !== undefined) {
      this.head = new Node(headValue);
      this.tail = this.head;
    }
  }

  appendToTail(value) {
    let box = new Node(value);
    if (this.head === undefined) {
      this.head = box;
      this.tail = this.head;
    } else this.tail.next = box;

    return (this.tail = box);
  }

  removeHead() {
    let headBox = this.head; //<- this is the head before removal
    this.head = this.head.next; // <- this is after removal
    return headBox;
  }

  findNode(value) {
    let currentBox = this.head;
    // while (currentBox) {
    //   if (currentBox.value === value) {
    //     return currentBox;
    //   } else currentBox = currentBox.next;
    // }
    // return null;
    const findValue = (value, currentBox) => {
      if (currentBox === null) return null;
      if (currentBox.value === value) return currentBox;
      return findValue(value, currentBox.next);
    };
    return findValue(value, currentBox);
  }

  /*
+-------------------------+
| Advanced Requirements!! |
+-------------------------+

The following are part of the advanced requirements.
Do not proceed until you are done with the basic
requirements for ALL data structures in this exercise.
*/

  forEach(callback) {}

  print() {
    let currentBox = this.head;
    let stringOut = "";
    while (currentBox) {
      stringOut += currentBox.value + ", ";
      currentBox = currentBox.next;
    }
    stringOut = stringOut.slice(0, -2);
    return stringOut;
  }

  insertHead(value) {
    let newHead = new Node(value);
    let oldHead = this.head;
    newHead.next = oldHead;
    return (this.head = newHead);
  }

  insertAfter(refNode, value) {}

  removeAfter(refNode) {
    if (!refNode) {
      return this.head;
    }
    let currentBox = this.findNode(refNode);
    let removedBox = currentBox.next;
    currentBox.next = removedBox.next;
    return currentBox;
  }
}

module.exports = LinkedList;

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   Basic Requirements:         X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
