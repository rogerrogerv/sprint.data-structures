class BinarySearchTree {
  constructor(value = undefined) {
    this.value = value;
    this.right = null;
    this.left = null;
  }

  insert(value) {
    let newTree = new BinarySearchTree(value);

    const addValue = (current, insertVal) => {
      //if it's less than, then go left
      if (insertVal.value < current.value) {
        if (current.left === null) {
          current.left = insertVal;
          return this;
        } else {
          addValue(current.left, insertVal);
        }
      }
      //if it's greater than, go right
      if (insertVal.value > current.value) {
        if (current.right === null) {
          current.right = insertVal;
          return this;
        } else {
          addValue(current.right, insertVal);
        }
      }
    };
    addValue(this, newTree);
    return this;
  }

  contains(value) {
    let result = false;
    let finder = (item, searchedItem) => {
      if (item.value === searchedItem) {
        result = true;
        return;
      }
      //go left
      if (searchedItem < item.value) {
        if (item.left) {
          finder(item.left, searchedItem);
        }
        return result;
      }

      if (searchedItem > item.value) {
        //go right
        if (item.right) {
          finder(item.right, searchedItem);
        }
        return result;
      }
    };
    
    finder(this, value);
    return result;
  }

  traverseDepthFirstInOrder (callback){
    return;
  }
}

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   Basic Requirements:         X
|X   What is the time complexity X
|X   of the above functions?     X
|X                   O(log(n))   X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
module.exports = BinarySearchTree;
