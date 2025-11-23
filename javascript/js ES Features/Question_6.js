"use strict";
const userLimitArg = Number(process && process.argv && process.argv[2] ? process.argv[2] : 5);
const limit = Number.isNaN(userLimitArg) ? 5 : userLimitArg;
function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    let row = [];
    for (let j = 1; j <= i; j++) {
      row.push("*");
    }
    console.log(row.join(" "));
  }
}
console.log("Pyramid with let (default):");
pyramid(limit);
console.log("Pyramid with var (simulate):");
function pyramidVar(n) {
  for (var i = 1; i <= n; i++) {
    var row = [];
    for (var j = 1; j <= i; j++) {
      row.push("*");
    }
    console.log(row.join(" "));
  }
}
pyramidVar(limit);
