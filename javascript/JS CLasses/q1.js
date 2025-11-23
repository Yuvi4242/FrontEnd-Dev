// Product Class
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        this.price = this.price - (this.price * percent / 100);
    }

    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price}, Category: ${this.category}`;
    }
}

// Creating multiple products
const products = [
    new Product(1, "Laptop", 55000, "Electronics"),
    new Product(2, "Shoes", 1200, "Fashion"),
    new Product(3, "Mobile Charger", 450, "Electronics"),
    new Product(4, "Smart Watch", 2500, "Gadgets")
];

// Filter price > 1000
const expensiveProducts = products.filter(p => p.price > 1000);

console.log("Products with price > 1000:");
expensiveProducts.forEach(p => console.log(p.getDetails()));
