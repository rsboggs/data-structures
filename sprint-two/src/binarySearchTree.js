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

};

BinarySearchTree.prototype.depthFirstLog = function(cb, val) {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
