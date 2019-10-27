

var HashTable = function () {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
  // for each element in storage
  /* for (let i = 0; i < this._limit; i++) {
    this._storage.set(i, []);
  } */
};

HashTable.prototype.insert = function (k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // declare bucket and get bucket from storage[index]
  let bucket = this._storage.get(index);

  if (!bucket) {
    bucket = [];
  }

  let found = false;
  // add property k, v to bucket
  for (let i = 0; i < bucket.length; i += 1) {
    const tuple = bucket[i];
    if (tuple[0] === k) {
      found = true;
      tuple[1] = v;
      break;
    }
  }

  if (!found) {
    bucket.push([k, v]);
    this._count += 1;
    if (this._count > this._limit * .75) {
      debugger;
      this._resize(this._limit * 2);
    }
  }

  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // declare bucket and assign to storage[index]
  let bucket = this._storage.get(index);

  let v;
  if (bucket) {
    for (let i = 0; i < bucket.length; i += 1) {
      const tuple = bucket[i];
      if (tuple[0] === k) {
        v = tuple[1];
        break;
      }
    }
  }

  // return the value at key in bucket
  return v;
};

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // declare bucket and assign to storage[index]
  const bucket = this._storage.get(index);

  if (bucket) {
    // delete the key in bucket
    for (let i = 0; i < bucket.length; i += 1) {
      const tuple = bucket[i];

      if (tuple[0] === k) {
        bucket.splice(i, 1);
        this._count -= 1;

        if (this._count < this._limit * .25 && this._limit > 4) {
          this._resize(this._limit / 2);
        }

        return;
      }
    }
  }
};

HashTable.prototype._resize = function (newLimit) {
  oldStorage = this._storage;
  this._limit = newLimit;
  this._storage = LimitedArray(newLimit);

  // copy over elements
  oldStorage.each(((bucket) => {
    if (bucket) {
      for (let i = 0; i < bucket.length; i += 1) {
        const tuple = bucket[i];
        this.insert(tuple[0], tuple[1]);
      }
    }
  }).bind(this));
};

/*
 * Complexity: What is the time complexity of the above functions?
 N is number of kv tuples
 All are O(N)
 */
