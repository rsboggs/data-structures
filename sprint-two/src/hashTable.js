

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._counter = 0;
};

HashTable.prototype.insert = function(k, v) {
  if ((this._counter + 1)/this._limit > 0.75) {
    this.rehash(this._limit * 2);
  }
    
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = [];
  var tuple = [k,v];
  //if !Array.isArray(this._storage.get(index))
  if (!Array.isArray(this._storage.get(index))) {
    //bucket.push tuple set the value of the index = bucket
    bucket.push(tuple);
  //else 
  } else { 
    //For loop through bucket
    bucket = this._storage.get(index);
    var found = false;
    for (var i = 0; i < bucket.length; i++) {
      //if keys are same
      if (k === bucket[i][0]) {
        //push the tuple into the bucket
        bucket[i][1] = v;
        found = true;
        break;
      }
    }
    if (!found) {
      bucket.push(tuple);
    }
  }
  //at end set bucket
  this._storage.set(index, bucket);
  this._counter++;
  // console.log(this._counter);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var temp = this._storage.get(index);
  for(var i = 0; i < temp.length; i++) {
    if(temp[i][0] === k) {
      return temp[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var temp = this._storage.get(index);
  for (var i = 0; i < temp.length; i++) {
    if (temp[i][0] === k) {
      temp.splice(i, 1);
      return true;
    }
  }
  this._storage.set(index, temp);
  this._counter--;
  if ((this._counter)/this._limit < 0.25) {
    this.rehash(this._limit / 2);
  }
};

HashTable.prototype.rehash = function(newLimit) {
  var temp = this._storage;
  this._storage = LimitedArray(newLimit);
  var temp_length = this._limit;
  this._limit = newLimit;

  for(var i = 0; i < temp_length; i++) {
    var bucket = temp.get(i);
    if (bucket !== undefined) {
      for (var j = 0; j < bucket.length; j++) {
        this.insert(bucket[j][0], bucket[j][1]);
      }
    }
  }

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
































