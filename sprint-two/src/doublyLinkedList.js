var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(val) {
    if(list.tail === null) {
      var node = Node(val);
      list.tail = node;
      list.head = node;
    } else {
      var oldTail = list.tail;
      var newTail = Node(val);
      oldTail.next = newTail;
      newTail.previous = oldTail;
      list.tail = newTail;
    }
  };

  list.removeHead = function() {
    var temp = list.head.value;
    list.tail.previous = null;
    list.head = list.head.next;
    return temp;
  };

  list.contains = function(val) {
    var current = list.head;
    while (current !== null) {
      if (current.value === val) {
        return true;
      }
      current = current.next;
    }
    return false;
  };

  return list;
};

var Node = function(val) {
  var node = {};
  node.value = val;
  node.next = null;
  node.previous = null;

  return node;
};