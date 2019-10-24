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
    // get value of head
    // bind head to the value of next of head
    // return the value
  };

  list.contains = function(target) {
    // make a variable for the current node
    // iterating through the linked list
     // check if value matches the target
       // return true
    // return false
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
 */
