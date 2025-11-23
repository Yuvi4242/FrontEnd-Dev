// Prototype version (reference)
function PersonProto(name) {
  this.name = name;
}
PersonProto.prototype.sayName = function () {
  console.log("Proto Name:", this.name);
};

function StudentProto(name, branch) {
  PersonProto.call(this, name);
  this.branch = branch;
}
StudentProto.prototype = Object.create(PersonProto.prototype);
StudentProto.prototype.constructor = StudentProto;
StudentProto.prototype.sayBranch = function () {
  console.log("Proto Branch:", this.branch);
};

const pProto = new StudentProto("Ravi", "ECE");
pProto.sayName();
pProto.sayBranch();

// ES6 class version
class PersonClass {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log("Class Name:", this.name);
  }
}

class StudentClass extends PersonClass {
  constructor(name, branch) {
    super(name);
    this.branch = branch;
  }
  sayBranch() {
    console.log("Class Branch:", this.branch);
  }
}

const pClass = new StudentClass("Ravi", "ECE");
pClass.sayName();
pClass.sayBranch();

// Both approaches provide essentially the same behavior.
// Classes are syntactic sugar over the prototype-based model.
