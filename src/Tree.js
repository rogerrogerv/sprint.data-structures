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
    // eslint-disable-next-line no-unused-vars
    let childValue;
    const findValue = (thisNode) => {
      if (thisNode.value === value) {
        result = true;
        childValue = thisNode;
      } else {
        thisNode.children.forEach(function(child) {
          findValue(child);
        });
      }
    };

    findValue(this); //<--- starter

    return result;
  }

  remove(value) {
    /*removes the value from tree and returns the removed value. 
    You may need to write tests for this.*/

    //search tree for value
    let result;
    
    const search = (branch) => {
      // found value
      if (branch.value === value) {
        result = value;
        // remove value and all branches below it
        value = undefined;
      }
    };
    search(this);
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
|X                  O(n2)        X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
module.exports = Tree;
