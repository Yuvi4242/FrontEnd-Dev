class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, qty) {
        this.items.push({ name, price, qty });
    }

    getTotal() {
        return this.items.reduce((sum, item) => sum + item.price * item.qty, 0);
    }

    applyCoupon(code) {
        if(!/^(SAVE|DISC)\d{1,2}$/.test(code)) {
            console.log("Invalid Coupon");
            return this.getTotal();
        }

        const discount = parseInt(code.match(/\d+/)[0]);
        const total = this.getTotal();
        return total - (total * discount / 100);
    }
}

// Example
const cart = new Cart();
cart.addItem("Shoes", 1200, 2);
cart.addItem("T-shirt", 500, 3);

console.log("Final Amount =", cart.applyCoupon("SAVE20"));
