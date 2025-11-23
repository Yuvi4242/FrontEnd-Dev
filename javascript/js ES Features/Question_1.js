"use strict";
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumeric = [];
const invalidNumeric = [];
const detailed = [];
for (let i = 0; i < apiData.length; i++) {
  const raw = apiData[i];
  const asString = String(raw);
  const asBool = Boolean(raw);
  const asNumber = Number(raw);
  const isBlankString = typeof raw === "string" && raw.trim().length === 0;
  const isInvalidNumber = Number.isNaN(asNumber) || isBlankString;
  if (isInvalidNumber) {
    invalidNumeric.push({ index: i, raw, asString, asBool, asNumber });
  } else {
    validNumeric.push({ index: i, raw, asString, asBool, asNumber });
  }
  detailed.push({ index: i, raw, asString, asBool, asNumber, valid: !isInvalidNumber });
}
console.log("Valid numeric entries:");
for (const e of validNumeric) {
  console.log(`#${e.index} raw=${e.raw} -> Number=${e.asNumber}, Boolean=${e.asBool}, String="${e.asString}"`);
}
console.log("Invalid numeric entries:");
for (const e of invalidNumeric) {
  console.log(`#${e.index} raw=${e.raw} -> detected invalid number (Number=${e.asNumber})`);
}
console.log("Detailed table:");
for (const row of detailed) {
  const tag = row.valid ? "[VALID]" : "[INVALID]";
  console.log(`${tag} #${row.index} raw=${row.raw} | Number=${row.asNumber} | Boolean=${row.asBool} | String="${row.asString}"`);
}
