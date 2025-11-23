function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

Car.prototype.getDetails = function () {
  console.log(`Brand: ${this.brand}, Model: ${this.model}`);
};

const carA = new Car("Toyota", "Corolla");
const carB = new Car("Hyundai", "Creta");

carA.getDetails();
carB.getDetails();
