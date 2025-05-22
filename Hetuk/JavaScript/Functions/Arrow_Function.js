/* Arrow Function */

// let stringConcatiation = () => {
//     console.log(2 + 2);
// }
// stringConcatiation();

// Calculator

let num1 = parseInt(process.argv[2]);
let operator = (process.argv[3]);
let num2 = parseInt(process.argv[4]);

let calculator = (num1, operator,num2) => {
    switch (operator) {
        case "+":
            console.log("Your Answer Is: ", num1 + num2);
            break;
        case "-":
            console.log("Your Answer Is: ", num1 - num2);
            break;
        case "*":
            console.log("Your Answer Is: ", num1 * num2);
            break;
        case "/":
            console.log("Your Answer Is: ", num1 / num2);
            break;
        case "%":
            console.log("Your Answer Is: ", num1 % num2);
            break;
        default:
        console.log("You Have Not Given Operator/Number1/Number2");
    }
}
calculator(num1, operator, num2);