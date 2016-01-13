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
      stackSize--;
      for (var i = 0; i < stackSize; i++) {
        someInstance[i] = someInstance[i + 1];
      }
      delete someInstance[stackSize];
      return toBeDeleted;
    }
  };

  someInstance.size = function() {
    return stackSize;
  };

  return someInstance;
};
