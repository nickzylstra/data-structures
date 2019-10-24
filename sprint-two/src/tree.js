var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  // extend newTree with treeMethods
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // create a new tree with argument value
  // add a new tree to the children property of this
};

treeMethods.contains = function(target) {
  // create var called treeHasTarget starts as false
  // if current node's value matches target
    // set treeHasTarget to true
  // if children exists
    // iterate through children
      // set treeHasTarget to return value of calling contains on child

  // return treeHasTarget
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
