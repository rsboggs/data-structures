var Tree = function(value, parent) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = parent || null;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value, this));
};

treeMethods.contains = function(target) {
  var found = false;

  var search = function(tree) {
    if(tree.value === target) {
      found = true;
    } else {
      for(var i = 0; i < tree.children.length; i++) {
        if(search(tree.children[i])) {
          return true;
        }
      }
    }
  };
  search(this);
  return found;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
