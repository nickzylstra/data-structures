// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return Boolean(this[node]);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (!this.contains(node)) {
    throw new SyntaxError();
  }

  const nodeEdges = this[node];
  nodeEdges.forEach((edge) => {
    const endNodeEdges = this[edge];
    const nodeIndexInEndNodeEdges = endNodeEdges.indexOf(node);
    endNodeEdges.splice(nodeIndexInEndNodeEdges, 1);
  });

  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // do we need to check for distand connections?
  let hasEdge = false;
  if (this.contains(fromNode) && this.contains(toNode)) {
    hasEdge = this[toNode].indexOf(fromNode) > -1 && this[fromNode].indexOf(toNode) > -1;
  }
  return hasEdge;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (!this.contains(fromNode) || !this.contains(toNode)) {
    throw new SyntaxError();
  }
  this[toNode].push(fromNode);
  this[fromNode].push(toNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (!this.contains(fromNode) || !this.contains(toNode)) {
    throw new SyntaxError();
  }
  const toNodeIdx = this[toNode].indexOf(fromNode);
  this[toNode].splice(toNodeIdx, 1);
  const fromNodeIdx = this[fromNode].indexOf(toNode);
  this[fromNode].splice(fromNodeIdx, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  const nodeKeys = Object.keys(this);
  nodeKeys.forEach((key) => {
    cb(parseInt(key));
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
  assume N = number vertices/nodes in the graph
  assume M = number of edges
  addNode - O(1), contains - O(1), removeNode - O(M), hasEdge - O(1), addEdge - O(1), removeEdge - O(1), forEach - O(N)
 */


