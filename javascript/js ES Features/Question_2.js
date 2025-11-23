"use strict";
const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];
for (let i = 0; i < employees.length; i++) {
  try {
    const emp = employees[i];
    if (!emp || typeof emp !== "object") throw new Error("Missing employee object");
    const name = emp.name;
    if (name === undefined) throw new Error("Missing name");
    const salary = Number(emp.salary);
    const years = Number(emp.years);
    if (Number.isNaN(salary) || Number.isNaN(years)) throw new Error("ConversionError");
    const bonus = years > 3 ? salary * 0.1 : salary * 0.05;
    console.log(`Employee: ${name} | Salary: ${salary} | Years: ${years} | Bonus: ${bonus}`);
  } catch (err) {
    console.log(`Error processing employee at index ${i}: ${err.message}`);
  }
}
