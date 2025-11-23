"use strict";
const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];
const valid = [];
const invalid = [];
for (let i = 0; i < transactions.length; i++) {
  try {
    const tx = transactions[i];
    if (tx === null) throw new Error("NullEntry");
    if (typeof tx !== "object") throw new Error("InvalidEntry");
    if (!("id" in tx)) throw new Error("MissingId");
    if (!("amount" in tx)) throw new Error("MissingAmount");
    if (typeof tx.amount !== "number") throw new Error("AmountNotNumber");
    if (tx.amount < 0) throw new Error("NegativeAmount");
    valid.push(tx);
    console.log(`Transaction ${tx.id} processed successfully.`);
    debugger;
  } catch (err) {
    invalid.push({ index: i, reason: err.message });
    console.log(`Transaction at index ${i} failed: ${err.message}`);
  }
}
console.log("=== Transaction Summary ===");
console.log(`Successful: ${valid.length}`);
console.log(`Failed: ${invalid.length}`);
console.log("Failed details:", invalid);
