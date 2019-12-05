const Graph = require('./classGraph');

// Directed Acyclic Graph
module.exports = class DAGraph extends Graph {
  constructor(noOfVertices) {
    super(noOfVertices);
    // this.parentList = new Map();
    this.costsList = new Map();
  }

  addCostVertex(v) {
    this.adjiacencyList.set(v, new Map());
  }

  addCostsEdge(v, w, cost) {
    this.adjiacencyList.get(v).set(w, cost);
  }
  //    set initial costs hash table
  addCost(v, value) {
    this.costsList.set(v, value);
  }

  findLowestCostNode(costs, visitedNodes) {
    let lowestCost = Number.MAX_SAFE_INTEGER;
    let lowestCostNode = null;

    for (let node of costs.keys()) {
      let cost = costs.get(node);

      if (cost < lowestCost && !visitedNodes.includes(node)) {
        lowestCost = cost;
        lowestCostNode = node;
      }
    }

    return lowestCostNode;
  }

  // Dijkstra's algorithm (Dijkstra's Shortest Path First algorithm)

  SPF() {
    let visitedNodes = [];
    let node = this.findLowestCostNode(this.costsList, visitedNodes);

    while (node) {
      let cost = this.costsList.get(node);
      let neighbors = this.adjiacencyList.get(node);

      for (let item of neighbors.keys()) {
        let newCost = cost + neighbors.get(item);

        if (newCost < this.costsList.get(item)) {
          this.costsList.set(item, newCost);
        }
      }
      visitedNodes.push(node);
      node = this.findLowestCostNode(this.costsList, visitedNodes);
    }

    let minTime = this.costsList.get('end');
    console.log(minTime);
    return minTime;
  }
};
