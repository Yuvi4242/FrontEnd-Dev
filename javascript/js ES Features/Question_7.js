"use strict";
class InvalidOperationError extends Error {}
class MathDomainError extends Error {}
const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;
function smartCalc(op, a, b) {
  switch (op) {
    case "add": return a + b;
    case "subtract": return a - b;
    case "divide":
      if (b === 0) throw new MathDomainError("DivideByZero");
      return a / b;
    case "power": return Math.pow(a, b);
    case "root":
      if (a < 0) throw new MathDomainError("RootOfNegative");
      return Math.pow(a, 1 / b);
    default:
      throw new InvalidOperationError(op);
  }
}
for (const op of operations) {
  try {
    const result = smartCalc(op, num1, num2);
    console.log(`Operation=${op} | Result=${result}`);
  } catch (e) {
    console.log(`Operation=${op} | Error=${e.message}`);
  }
}
