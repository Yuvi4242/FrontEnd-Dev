function Person(name) {
  this.name = name;
}
Person.prototype.getName = function () {
  return `Person: ${this.name}`;
};

function Faculty(name, dept) {
  Person.call(this, name);
  this.department = dept;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.getDepartment = function () {
  return `Faculty Dept: ${this.department}`;
};

function Professor(name, dept, subject) {
  Faculty.call(this, name, dept);
  this.subject = subject;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.getSubject = function () {
  return `Professor Subject: ${this.subject}`;
};

const prof = new Professor("Dr. Sharma", "CSE", "Algorithms");

console.log(prof.getName());
console.log(prof.getDepartment());
console.log(prof.getSubject());
