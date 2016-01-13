var Queue = function() {
  var someInstance = {};
  var stackSize = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    someInstance[stackSize] = value;
    stackSize++;
  };

  someInstance.dequeue = function() {
    if (stackSize) {
      var toBeDeleted = someInstance[0];
      delete someInstance[0];
      stackSize--;
      return toBeDeleted;
    }
  };

  someInstance.size = function() {
    return stackSize;
  };

  return someInstance;
};
