var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {
    stackSize: 0
  };
  _.extend(obj, stackMethods);
  return obj;
};

var stackMethods = {
  size: function() {
    return this.stackSize;
  },
  push: function(val) {
    this.stackSize++;
  },
  pop: function() {
    if(this.stackSize) {
      this.stackSize--;
    }
  }
};