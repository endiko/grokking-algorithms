const Queue = require('./classQueue');

module.exports = class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.adjiacencyList = new Map();
  }

  addVertex(v) {
    this.adjiacencyList.set(v, []);
  }

  addEdge(v, w) {
    this.adjiacencyList.get(v).push(w);
    this.adjiacencyList.get(w).push(v);
  }
  printGraph() {
    let getKeys = this.adjiacencyList.keys();

    for (let i of getKeys) {
      let getValues = this.adjiacencyList.get(i);
      let str = '';

      for (let j of getValues) {
        str += `${j} `;
      }
      console.log(`${i} -> ${str}`);
    }
  }
  BFS(startingNode) {
    let visited = [];

    for (let i = 0; i < this.noOfVertices; i++) {
      visited[i] = false;
    }

    let queue = new Queue();

    visited[startingNode] = true;
    queue.enqueue[startingNode];

    while (!queue.isEmpty()) {
      let qElement = queue.dequeue();

      //   передаем текущую вершину в колбэк функцию
      // callback(qElement)
      // если колбэк завершится удачно, то вернем результат и поиск окончен
      // иначе
      let getList = this.adjiacencyList[qElement];

      for (let i of getList) {
        let neighbor = getList[i];

        if (!visited.includes(neighbor)) {
          visited[neighbor] = true;
          queue.enqueue(neighbor);
        }
      }
    }
    console.log(visited.length);
    return visited.length;
  }
};
