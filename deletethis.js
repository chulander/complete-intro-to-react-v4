var something = (function() {
  var nextVal;
  return {
    // for of loop
    [Symbol.iterator]() {
      return this;
    },
    // standard iterator;
    next() {
      nextVal = nextVal === undefined ? 1 : 3 * nextVal + 6;
      return {
        done: false,
        value: nextVal
      };
    }
  };
})();

for (var i = 1; i < 5; i++) {
  console.log(`${i} attempt`, something.next().value);
}
