/* Functions */

function sum() {
    // Basic Nature Of Function Is To Return Value/ Undefine
    console.log(2 + 4);
}

sum();

function sub() {
    return 2 - 4;
}
let ans = sub();
console.log("Answer: ", ans);

let num1 = 7;
let num2 = 7;
let num3 = 7;

function mul(a, b, c) {
    return a * b + c;
}

let ans2 = mul(num1, num2, num3);
console.log("Answer2: ", ans2);

/* Example */

let food = "biryani";
khushi(food);

function khushi(value) {
    hetuk(value);
}

function hetuk(value) {
    nishad(value);
}

function nishad(value) {
    farhan(value);
}

function farhan(value) {
    console.log("Value From Farhan: ", value);
}

function blockScope() {
    let name = "Hetuk"
    console.log("My Name Is: ", name);
}

blockScope();
// console.log("My Name Is: ", name);