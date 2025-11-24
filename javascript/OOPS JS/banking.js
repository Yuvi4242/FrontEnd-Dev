class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited: ${amount}`);
  }

  withdraw(amount) {
    if (amount > this.#balance) throw new Error("Insufficient balance");
    this.#balance -= amount;
    console.log(`Withdrawn: ${amount}`);
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();

acc.deposit(500);

try {
  acc.withdraw(800);
} catch (err) {
  console.log("Error:", err.message);
}

console.log("Final Balance:", acc.getBalance());
