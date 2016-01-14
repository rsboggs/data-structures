var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.stackSize = 0;
  return obj;
};

var stackMethods = {
  size: function() {
    return this.stackSize;
  },
  push: function(val) {
    this[this.stackSize] = val;
    this.stackSize++;
  },
  pop: function() {
    if(this.stackSize) {     
      this.stackSize--;
      var temp = this[this.stackSize];
      delete this[this.stackSize];
      return temp;
    }
  }
};

