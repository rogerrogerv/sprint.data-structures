class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    //adds a child to tree/subtree and returns the new child node
    //(which should be a tree instance)
    const newChild = new Tree(value);
    this.children.push(newChild);
    return newChild;
  }

  contains(value) {
    let result = false;
    const findValue = (thisNode) => {
      if (thisNode.value === value) {
        result = true;
      } else {
        thisNode.children.forEach(function(child) {
          findValue(child);
        });
      }
    };

    findValue(this); //<--- starter

    return result;
  }

  /*
+-------------------------+
| Advanced Requirements!! |
+-------------------------+

The following are part of the advanced requirements.
Do not proceed until you are done with the basic
requirements for ALL data structures in this exercise.

*/
  traverseDepthFirst(fn) {}

  traverseBreadthFirst(fn) {}
}

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
module.exports = Tree;
