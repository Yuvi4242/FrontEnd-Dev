function delayRandom(min = 1000, max = 2000) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function boilWater() {
  return new Promise((resolve, reject) => {
    const ms = delayRandom();
    setTimeout(() => {
      if (Math.random() < 0.15) return reject(new Error("Water heater failed"));
      console.log("Step: Water boiled");
      resolve("boiled water");
    }, ms);
  });
}

function brewCoffee(boiledWater) {
  return new Promise((resolve, reject) => {
    const ms = delayRandom();
    setTimeout(() => {
      if (Math.random() < 0.15) return reject(new Error("Coffee grounds missing"));
      console.log("Step: Coffee brewed using", boiledWater);
      resolve("brewed coffee");
    }, ms);
  });
}

function pourIntoCup(brewedCoffee) {
  return new Promise((resolve, reject) => {
    const ms = delayRandom();
    setTimeout(() => {
      if (Math.random() < 0.05) return reject(new Error("Cup cracked"));
      console.log("Step: Coffee poured into cup:", brewedCoffee);
      resolve("cup of coffee");
    }, ms);
  });
}

// Use promise chaining and catch any error
boilWater()
  .then(result => brewCoffee(result))
  .then(result => pourIntoCup(result))
  .then(() => {
    console.log("Coffee ready for the team!");
  })
  .catch(err => {
    console.error("Coffee process failed:", err.message);
  });
