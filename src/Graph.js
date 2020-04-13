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

  contains() {

  }

  addEdge() {

  }

  removeEdge() {

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
