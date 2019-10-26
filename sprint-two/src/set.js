var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this._storage[item] = true;
  }
};

setPrototype.contains = function(item) {
  return Boolean(this._storage[item]);
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 N is number of items in set, all methods are O(1)
 */
