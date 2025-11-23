if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (callback, thisArg) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
      if (i in this) {
        output[i] = callback.call(thisArg, this[i], i, this);
      }
    }
    return output;
  };
}

console.log([1, 2, 3].myMap(x => x * 2)); // [2,4,6]
