const findLowestCostNode = (costs, visitedNodes) => {
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
};

const findShortestPath = (graph, costs, parents) => {
  let visitedNodes = [];

  let node = findLowestCostNode(costs, visitedNodes);

  while (node) {
    let cost = costs.get(node);
    let neighbors = graph[node];

    for (let item of neighbors.keys()) {
      let newCost = cost + neighbors.get(item);

      if (newCost < costs.get(item)) {
        costs.set(item, newCost);
        parents.set(item, node);
      }
    }
    visitedNodes.push(node);
    node = findLowestCostNode(costs, visitedNodes);
  }

  return costs.get('end');
};

let graph = {};
graph['start'] = new Map();
graph['start'].set('A', 6);
graph['start'].set('B', 2);
graph['A'] = new Map();
graph['A'].set('end', 1);
graph['B'] = new Map();
graph['B'].set('A', 3);
graph['B'].set('end', 5);
graph['end'] = new Map();

let costs = new Map();
costs.set('A', 6);
costs.set('B', 2);
costs.set('end', Infinity);

let parents = new Map();
parents.set('A', 'start');
parents.set('B', 'start');
parents.set('end', undefined);

// console.log(findShortestPath(graph, costs, parents));

console.log(graph);
