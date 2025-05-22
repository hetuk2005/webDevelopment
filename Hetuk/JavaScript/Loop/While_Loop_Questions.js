// 6. Password Checker

// let password = process.argv[2];
// let pass = "Hetuk123";

// while (password !== pass) {
//     console.log("Incorrect Password Please Try Again!");
//     return;
// }
// console.log("You Have Entered Correct Password: ",password);

// 7. Multiplication Of Table

let num = parseInt(process.argv[2]);
let num1 = 1;

while (num1 <= 10) {
    console.log("Multiplication Table: ", num*num1);
    num1++;
}

// 8. Count Digits In A Number

// let num2 = parseInt(process.argv[3]); // 65
// let num3 = 0;

// while (num3 <= num2) {
//     console.log("The Digit In Your Number Is: ", num2[length]);
//     num3++;
// }

// 15. Print Powers of 2 less than N

let N = parseInt(process.argv[4]);
let i = 1;
while (i <= N) {
    console.log("Numbers: ", i);
    i *= 2;
}
