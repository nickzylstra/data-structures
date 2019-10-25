var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  return this._storage.indexOf(item) > -1;
};

setPrototype.remove = function(item) {
  // set variable to index of item
  const index = this._storage.indexOf(item);
  // if index is -1
  if (index === -1) {
    // return null
    return null;
  }
  // splice item index
  this._storage.splice(index, 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 N is number of items in set, all methods are O(N)
 */
