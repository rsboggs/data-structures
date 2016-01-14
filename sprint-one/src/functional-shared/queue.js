var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {stackSize: 0};
  _.extend(obj, queueMethods);
  return obj;
};

var queueMethods = {
  size: function() {
    return this.stackSize;
  },
  enqueue: function(val) {
    this[this.stackSize] = val;
    this.stackSize++;
  },
  dequeue: function() {
    if (this.stackSize) {
      this.stackSize--;
      var temp = this[0];
      for (var i = 0; i < this.stackSize; i++) {
        this[i] = this[i+1];
      }
      delete this[this.stackSize];
      return temp;
    }
  }
};


