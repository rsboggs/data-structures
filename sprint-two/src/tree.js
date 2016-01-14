var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var found = false;

  var search = function(tree) {
    if(tree.value === target) {
      found = true;
      return;
    } else {
      for(var i = 0; i < tree.children.length; i++) {
        search(tree.children[i]);
      }
    }
  };
  search(this);
  return found;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
