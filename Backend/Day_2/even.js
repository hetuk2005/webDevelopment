const even = require("is-even");

try {
  console.log("Even: ", even(3));
} catch (error) {
  console.log("✈️  error: ", error);
}
