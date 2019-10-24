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
  const newTree = new Tree(value);
  // add a new tree to the children property of this
  this.children.push(newTree);
};

treeMethods.contains = function(target) {
  // create var called treeHasTarget starts as false
  let treeHasTarget = false;
  // if current node's value matches target
  if (this.value === target) {
    // set treeHasTarget to true
    treeHasTarget = true;
  }
  // if children exists
  const childrenCount = this.children.length;
  if (childrenCount > 0) {
    // iterate through children while treeHasTarget is false
    for (let i = 0; i < childrenCount && !treeHasTarget; i++) {
      // set treeHasTarget to return value of calling contains on child
      treeHasTarget = this.children[i].contains(target);
    }
  }

  // return treeHasTarget
  return treeHasTarget;
};



/*
 * Complexity: What is the time complexity of the above functions?
 assuming n equals the number of nodes in tree
 addChild - O(1), contains - O(N)
 */
