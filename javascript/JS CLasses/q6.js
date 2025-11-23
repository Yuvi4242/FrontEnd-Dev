class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary += this.salary * percent / 100;
    }
}

const employees = [
    new Employee(1, "Amit", "HR", 30000),
    new Employee(2, "Neha", "IT", 60000),
    new Employee(3, "Raj", "Sales", 40000),
    new Employee(4, "Simran", "Admin", 35000),
    new Employee(5, "Karan", "IT", 70000)
];

// Calculate total annual payout
const totalPayout = employees.reduce((sum, emp) => sum + emp.getAnnualSalary(), 0);

console.log("Total Annual Payout:", totalPayout);
