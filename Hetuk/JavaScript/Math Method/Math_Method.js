let num = 125;

// 1. Power

let ans = Math.pow(num, 3);
console.log(ans);

// 2. Square Root

let ans1 = Math.sqrt(num);
console.log(ans1);

// 3. Cube Root Without Using Method

let num1 = 27;
console.log("Without Inbuild", num1 ** (1 / 3));

// 4. Ceil

// 7.1 = 8, 7.6 = 8

let num2 = 7.1;
console.log(Math.ceil(num2));

// 5. Floor

// 7.1 = 7, 7.6 = 7

let num3 = 7.6;
console.log(Math.floor(num3));

// 6. Fround

console.log(Math.fround(num2));

// 7. Round

console.log(Math.round(num3));

// 8. Random Value Generater

let num6 = 6.4;

function random(x) {
    console.log(Math.round(Math.random() * x));
}
random(num6);

// 9. Log

let num4 = 16;

let num5 = 1;

console.log(Math.log(num4) / Math.log(num5));
console.log(Math.log(num4));