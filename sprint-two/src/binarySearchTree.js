var BinarySearchTree = function(value) {
  bst = Object.create(BinarySearchTree.prototype);
  bst._root = new Node(value);
  return bst;
};

var Node = function (val) {
  this.value = val;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function (value) {
  
};

BinarySearchTree.prototype.contains = function (value) {

};

BinarySearchTree.prototype.depthFirstLog = function (cb) {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
