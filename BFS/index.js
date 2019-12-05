const graph = {
  a: ['b', 'c'],
  b: ['a', 'd'],
  c: ['a', 'd'],
  d: ['b', 'c']
};

function BFS(graph, targetVertix) {
  let searchQueue = [];
  let visited = [];

  searchQueue.push(...graph['a']);

  while (searchQueue.length) {
    let vertix = searchQueue.shift();

    if (!visited.includes(vertix)) {
      if (vertix === targetVertix) {
        return true;
      }
      searchQueue.push(...graph[vertix]);
      visited.push(vertix);
    }
  }
  return false;
}

console.log(BFS(graph, 'c'));
