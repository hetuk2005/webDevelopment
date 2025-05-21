/* While Loop */

let num = 9;
let i = 0;
let sum = null;

while (i < num) {
    sum += i;
    i++;
}

console.log("Sum: ", sum);

// 1. Count 1 To 100

let start = 1;
let end = 100;

while (start <= end) {
    console.log("Start: ", start);
    start++;
}

// 2. Even Number Upto N

// let N = parseInt(process.argv[2]);
// console.log(typeof N);
// let start1 = 2;

// while (start1 <= N) {
// console.log("Even Numbers: ", start1);
//     start1 += 2;
// }

// 3. Sum Until User Enters 0

// let N1 = parseInt(process.agrv[2]);
// let i1 = 0;
// let sum1 = null;

// while (i1< N1) {
//     sum1 += i1;
//     sum1++
// }

// console.log("Sum1: ", sum1);

// 4. Odd Numbers

// let N2 = parseInt(process.argv[2]);
// let start2 = 2;

// while (start2 <= N) {
//     if (start2 % 2 == 0) {
//         console.log("Odd Numbers: ", start2);
//     }
//     start2++;
// }

// 5. Reverse String

let str = process.argv[2]; 
let length = str.length - 1; // hello -> 5
let index = 0; // start initial stage
let reverseStr = ""; // bag -> olleh <- Output Also

while (length >= index) {
    reverseStr += str[length];
    length--;
}

console.log("Reverse String: ", reverseStr);