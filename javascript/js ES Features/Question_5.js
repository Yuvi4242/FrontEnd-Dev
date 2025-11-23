"use strict";
function runOriginal() {
  try {
    console.log(score);
    announce();
    var score = 50;
    function announce() { console.log("Game started"); }
    let status = "ready";
    startGame();
    function startGame() { console.log(status); }
  } catch (e) {
    console.log("Original run error:", e.message);
  }
}
function fixedVersion() {
  var score = 50;
  announce();
  function announce() { console.log("Game started"); }
  let status = "ready";
  startGame();
  function startGame() { console.log(status); }
}
const announceArrow = () => console.log("Game started");
const startGameArrow = () => console.log("ready");
console.log("Running original (expected to show hoisting effects):");
runOriginal();
console.log("Running fixed version:");
fixedVersion();
console.log("Running arrow functions version:");
announceArrow();
startGameArrow();
