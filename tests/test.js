const test = require("../index.js");

const tests = [
  [test(), "Ethereum Mainnet"],
  [test(1), "Ethereum Mainnet"],
  [test(1, true).name, "Ethereum Mainnet"],
];

tests.forEach((item) => {
  if (item[0] !== item[1]) {
    console.log(`FAILED: ${item[0]} !== ${item[1]}`);
    throw new Error("FAILED");
  } else {
    console.log(`PASSED: ${item[0]} === ${item[1]}`);
  }
});
