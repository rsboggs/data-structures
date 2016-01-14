var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.stackSize = 0;
  return obj;
};

var queueMethods = {
  size: function() {
    return this.stackSize;
  },
  enqueue: function(val) {
    this.stackSize++;
  },
  dequeue: function() {
    if(this.stackSize) {
      this.stackSize--;
    }
  }
};


