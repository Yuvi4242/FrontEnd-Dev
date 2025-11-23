"use strict";
function showMessageFixed() {
  let greeting = "Welcome";
  console.log(greeting);
  debugger;
}
try {
  showMessageFixed();
} catch (e) {
  console.log("Error:", e.message);
}
