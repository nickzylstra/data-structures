// Instantiate a new graph
var Graph = function() {
  // this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // const nodeObj = {value: node, edges: []};
  // this.nodes.push(nodeObj);
  this[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  /* for (let i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === node) {
      return true;
    }
  }
  return false; */
  const nodeKeys = Object.keys(this);
  let containsNode = false;
  nodeKeys.forEach((nodeKey) => {
    if (nodeKey === node.toString()) {
      containsNode = true;
    }
  });
  return containsNode;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // if node is not in graph
  if (!this.contains(node)) {
    // throw err
    throw new SyntaxError();
  }

  const nodeEdges = this[node];
  nodeEdges.forEach((edge) => {
    const endNodeEdges = this[edge];
    const nodeIndexInEndNodeEdges = endNodeEdges.indexOf(node);
    endNodeEdges.splice(nodeIndexInEndNodeEdges, 1);
  });

  delete this[node];

  /* // create a var for node obj
  let nodeObj;
  let nodeObjIdx;
  // find the node inside nodes array
  for (let i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === node) {
      nodeObj = this.nodes[i];
      nodeObjIdx = i;
    }
  }
  // for each edge in node obj
  for (let i = 0; i < nodeObj.edges.length; i++) {
    // find node inside nodes array
    const edge = this.nodes.edges[i];
    let edgeNodeObj;
    for (let j = 0; j < this.nodes.length; j++) {
      if (this.nodes[j].value === edge) {
        edgeNodeObj = this.nodes[j];
      }
    }
    // find edge index in nodes edges list
    const edgeIdx = edgeNodeObj.edges.indexof(edge);
    // remove edge from node's edges list
    edgeNodeObj.edges.splice(edgeIdx, 1);
  }
  // remove the node
  this.nodes.splice(nodeObjIdx, 1); */
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // do we need to check for distand connections?
  let hasEdge = false;
  if (this.contains(fromNode) && this.contains(toNode)) {
    hasEdge = this[toNode].indexOf(fromNode) > -1 && this[fromNode].indexOf(toNode) > -1;
  }
  // return if toNode has fromNode edge and fromNode has toNode edge
  return hasEdge;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // check that nodes exist
  // debugger;
  if (!this.contains(fromNode) || !this.contains(toNode)) {
    throw new SyntaxError();
  }
  // push fromNode to toNode's edges list
  this[toNode].push(fromNode);
  // push toNode to fromNode's edges list
  this[fromNode].push(toNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // check that nodes exist
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
    cb(key);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


