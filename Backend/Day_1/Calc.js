const { add, divide, expo, sub, mul } = require("./index");

// console.log("✈️  sub: ", mul(3, 6));

let num1 = +process.argv[2];
let operator = process.argv[3];
let num2 = +process.argv[4];

switch (operator) {
  case "+":
    console.log(add(num1, num2));
    break;

  case "-":
    console.log(sub(num1, num2));
    break;

  case "*":
    console.log(mul(num1, num2));
    break;

  case "/":
    console.log(divide(num1, num2));
    break;

  case "**":
    console.log(expo(num1, num2));
    break;

  default:
    console.log("Please Write Correct Operator");
}
