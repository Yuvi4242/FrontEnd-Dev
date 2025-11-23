"use strict";
try {
  const f1 = new Function("a","a","total = 10; delete total; return total;");
  const res = f1(5,10);
  console.log("Non-strict function executed, result:", res);
} catch (e) {
  console.log("Non-strict function error:", e.message);
}
try {
  const f2 = new Function('"use strict"; a, a => { total = 10; }');
  console.log("Attempted strict duplicate params function created");
} catch (e) {
  console.log("Strict-mode function creation error (expected):", e.message);
}
function demoCorrect(a,b) {
  let total = 10;
  return a + b + total;
}
console.log("Correct demo call:", demoCorrect(5,10));
