"use strict";
function outerOriginal() {
  console.log("outer start");
  console.log(count);
  var count = 5;
  function inner() {
    console.log(count);
    var count = 10;
  }
  inner();
  console.log("outer end");
}
console.log("Running original hoisting example:");
outerOriginal();
console.log("Converting inner to arrow:");
function outerArrow() {
  var count = 5;
  const inner = () => {
    console.log(count);
  };
  inner();
}
outerArrow();
debugger;
