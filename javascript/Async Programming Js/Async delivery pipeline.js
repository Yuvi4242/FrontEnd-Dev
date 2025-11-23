function randomDelay(min = 1000, max = 2000) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function maybeFail(chance = 0.2) {
  return Math.random() < chance;
}

function takeOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (maybeFail(0.1)) return reject(new Error("Failed to take order"));
      console.log("Step 1: Order taken");
      resolve("order details");
    }, randomDelay());
  });
}

function prepare(order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (maybeFail(0.15)) return reject(new Error("Preparation failed"));
      console.log("Step 2: Food prepared");
      resolve("prepared food");
    }, randomDelay());
  });
}

function pack(preparedFood) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (maybeFail(0.05)) return reject(new Error("Packing failed"));
      console.log("Step 3: Package ready");
      resolve("packed order");
    }, randomDelay());
  });
}

function dispatch(packedOrder) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (maybeFail(0.1)) return reject(new Error("Dispatch failed"));
      console.log("Step 4: Out for delivery");
      resolve("in transit");
    }, randomDelay());
  });
}

function deliver(inTransit) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (maybeFail(0.1)) return reject(new Error("Delivery failed")))
      console.log("Delivery completed!");
      resolve("delivered");
    }, randomDelay());
  };
 

async function runPipeline() {
  console.log("Start Pipeline");
  try {
    const order = await takeOrder();
    const prepared = await prepare(order);
    const packed = await pack(prepared);
    const inTransit = await dispatch(packed);
    const final = await deliver(inTransit);
    console.log("Pipeline finished successfully:", final);
  } catch (err) {
    console.error("Pipeline failed!", err.message);
  }
}

runPipeline();
