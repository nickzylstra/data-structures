// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  const nodeObj = {value: node, edges: []};
  this.nodes.push(nodeObj);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (let i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // if node is not in graph
  if (!this.contains(node)) {
    // throw err
    throw new syntaxError();
  }
  // create a var for node obj
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
  this.nodes.splice(nodeObjIdx, 1);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


