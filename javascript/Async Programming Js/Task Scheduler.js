console.log("Start");

setTimeout(() => {
  console.log("setTimeout (macrotask) callback");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise.then (microtask) callback");
});

console.log("Synchronous log");

console.log("End");

