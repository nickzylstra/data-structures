

var HashTable = function () {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  // for each element in storage
  for (let i = 0; i < this._limit; i++) {
    this._storage.set(i, {});
  }
};

HashTable.prototype.insert = function (k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // declare bucket and get bucket from storage[index]
  const bucket = this._storage.get(index);
  // add property k, v to bucket
  bucket[k] = v;
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // declare bucket and assign to storage[index]
  const bucket = this._storage.get(index);
  // return the value at key in bucket
  return bucket[k];
};

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // declare bucket and assign to storage[index]
  const bucket = this._storage.get(index);
  // delete the key in bucket
  delete bucket[k];
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
