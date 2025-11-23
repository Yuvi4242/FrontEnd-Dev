"use strict";
const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];
const clean = [];
const errors = [];
for (let i = 0; i < rawData.length; i++) {
  const line = rawData[i];
  try {
    const parsed = JSON.parse(line);
    if (!("user" in parsed) || !("age" in parsed)) {
      throw new Error("MissingKeys");
    }
    parsed.age = Number(parsed.age);
    if (Number.isNaN(parsed.age)) throw new Error("AgeConversionError");
    if (parsed.age < 18) {
      console.log(`Filtered under-18 user at line ${i}: ${parsed.user} (${parsed.age})`);
    } else {
      clean.push(parsed);
    }
  } catch (e) {
    errors.push({ line: i, raw: line, error: e.message });
    console.log(`Line ${i} parse error: ${e.message}`);
  }
}
console.log("Clean entries:", clean);
console.log("Errors:", errors);
