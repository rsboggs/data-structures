var BinarySearchTree = function(value) {

  var obj = Object.create(BinarySearchTree.prototype);
  obj.value = value;
  obj.left = null;
  obj.right = null;
  return obj;
};

BinarySearchTree.prototype.insert = function(val) {
  if (this.value > val) {
    if (this.left === null) {
      this.left = BinarySearchTree(val);
    } else {
      this.left.insert(val);
    }
  } else {
    if (this.right === null) {
      this.right = BinarySearchTree(val);
    } else {
      this.right.insert(val);
    }
  }
};

BinarySearchTree.prototype.contains = function(val) {
  if(this.value === val) {
    return true;
  } else {
    if(this.left !== null) {
      if(this.left.contains(val)) {
        return true;
      }
    } 
    if(this.right !== null) {
      if(this.right.contains(val)) {
        return true;
      }
    }
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  this.value = cb(this.value);
  if(this.right !== null) {
    this.right.depthFirstLog(cb); 
  }
  if(this.left !== null) {
    this.left.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
