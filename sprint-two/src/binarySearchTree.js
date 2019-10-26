var BinarySearchTree = function (value) {
  bst = Object.create(BinarySearchTree.prototype);
  bst.value = value;
  bst.left = null;
  bst.right = null;
  return bst;
};

BinarySearchTree.prototype.insert = function (inputValue) {
  const inputNode = BinarySearchTree(inputValue);
  const innerInsert = function (node) {
    if (node.value === inputValue) {
      return;
    }
    if (inputValue < node.value) {
      if (node.left === null) {
        node.left = inputNode;
      } else {
        innerInsert(node.left);
      }
    } else {
      if (node.right === null) {
        node.right = inputNode;
      } else {
        innerInsert(node.right);
      }
    }
  };
  innerInsert(this);
};

BinarySearchTree.prototype.contains = function (inputValue) {
  const innerContains = function (node) {
    if (node.value === inputValue) {
      return true;
    }
    if (inputValue < node.value) {
      /* if (node.left === null) {
        return false;
      } else {
        return innerContains(node.left);
      } */
      return (node.left === null) ? false : innerContains(node.left);
    } else {
      if (node.right === null) {
        return false;
      } else {
        return innerContains(node.right);
      }
    }
  };
  return innerContains(this);
};

BinarySearchTree.prototype.depthFirstLog = function (cb) {
  const innerDFL = function (node) {
    cb(node.value);
    if (node.left !== null) {
      innerDFL(node.left);
    }
    if (node.right !== null) {
      innerDFL(node.right);
    }
  };
  innerDFL(this);
};

BinarySearchTree.prototype.breadthFirstLog = function (cb) {
  const queue = [];
  queue.push(this);

  while (queue.length > 0) {
    cb(queue[0]);
    let node = queue.shift();

    if (node.left !== null) {
      queue.push(node.left);
    }

    if (node.right !== null) {
      queue.push(node.right);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 assume N is number of nodes
 insert - O(log N), cointains - O(log N), depthFirstLof - O(N).
 */
