class Graph {
  constructor() {
    /**
     * There are many representations of Graph.
     * We can store Graph in many ways.
     * One way is by using Adjacency List.
     */
    this.nodes = {}; // Adjacency List
  }

  addNode(value) {
    this.nodes[value] = [];
    return undefined;
  }

  removeNode(value) {
    while (this.nodes[value].length) {
      let value2 = this.nodes[value].pop();
      this.removeEdge(value, value2);
    }
    delete this.nodes[value];
    return undefined;
  }

  contains(value) {
    let isFound = false;
    if (this.nodes[value]) {
      isFound = true;
    } else {
      return false;
    }
    return isFound;
  }

  addEdge() {

  }

  removeEdge(value1, value2) {
    this.nodes[value1] = this.nodes[value1].filter((value) => value !== value2);
    //keep everything that is NOT value2
    this.nodes[value2] = this.nodes[value2].filter((value) => value !== value1);
    return undefined;
  }

  hasEdge() {

  }
}

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/

module.exports = Graph;
