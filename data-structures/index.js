const Graph = require('./classGraph');
const Queue = require('./classQueue');
const DAGraph = require('./classDAGraph');

//  Graph
// создаем новый экземпляр класса Graph
let graph = new Graph();

//  Задаем массив вершин
const vertices = ['a', 'b', 'c', 'd'];

// В цикле добавлем вершины в наш граф в качестве ключей
for (let i = 0; i < vertices.length; i++) {
  graph.addVertex(vertices[i]);
}

// устанавливаем связи между вершинами
graph.addEdge('a', 'b');
graph.addEdge('a', 'c');
graph.addEdge('b', 'd');
graph.addEdge('c', 'd');

//  выводим граф на печать
console.log('выводим граф graph на печать');
graph.printGraph();

// Queue
let q = new Queue();
q.enqueue(2);
q.enqueue(4);
q.enqueue(6);
q.enqueue(56767);
console.log('выводим Queue на печать');
q.printQueue();

// Directed Acyclic Graph

//  Example 1;

let daGraph = new DAGraph();
let vertices1 = ['start', 'a', 'b', 'end'];
vertices1.forEach(v => {
  daGraph.addCostVertex(v);
});

// add relations between vertices

daGraph.addCostsEdge('start', 'a', 6);
daGraph.addCostsEdge('start', 'b', 2);
daGraph.addCostsEdge('a', 'end', 1);
daGraph.addCostsEdge('b', 'a', 3);
daGraph.addCostsEdge('b', 'end', 5);

// add initial costs

daGraph.addCost('a', 6);
daGraph.addCost('b', 2);
daGraph.addCost('end', Infinity);

console.log('Алгоритм дейкстра');
daGraph.SPF();

// Example 2

let daGraph2 = new DAGraph();
let vertices2 = ['start', 'a', 'b', 'c', 'd', 'end'];

vertices2.forEach(v => {
  daGraph2.addCostVertex(v);
});

// add relations between vertices

daGraph2.addCostsEdge('start', 'a', 5);
daGraph2.addCostsEdge('start', 'b', 2);
daGraph2.addCostsEdge('a', 'c', 2);
daGraph2.addCostsEdge('a', 'd', 4);
daGraph2.addCostsEdge('b', 'a', 8);
daGraph2.addCostsEdge('b', 'c', 7);
daGraph2.addCostsEdge('c', 'end', 1);
daGraph2.addCostsEdge('d', 'c', 6);
daGraph2.addCostsEdge('d', 'end', 3);

// add initial costs

daGraph2.addCost('a', 5);
daGraph2.addCost('b', 2);
daGraph2.addCost('c', Infinity);
daGraph2.addCost('d', Infinity);
daGraph2.addCost('end', Infinity);

console.log('Алгоритм дейкстра');
daGraph2.SPF();
