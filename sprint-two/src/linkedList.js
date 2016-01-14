var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if(list.tail === null) {
      var tail = list.tail = Node(value);
      list.head = tail;
    } else if(list.head === null) {
      list.head = list.tail;
      list.tail = Node(value);
      list.head.next = list.tail;
    } else {
      var oldTail = list.tail;
      var newTail = Node(value);
      oldTail.next = newTail;
      list.tail = newTail;
    }
  };

  list.removeHead = function() {
    var temp = list.head.value;
    list.head = list.head.next;
    return temp;
  };

  list.contains = function(target) {
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