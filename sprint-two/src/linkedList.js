var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    const node = Node(value);
    if (!this.tail) {
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    if (!this.head) {
      this.head = node;
    }
  };

  list.removeHead = function() {
    if (!this.head) {
      return null;
    }
    const node = this.head;
    this.head = node.next;
    if (this.head === null) {
      this.tail = null;
    }
    return node.value;
  };

  list.contains = function(target) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
addtotail - constant, removehead - constant, contains - linear
 */
