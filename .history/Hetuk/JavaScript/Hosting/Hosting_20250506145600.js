/* 

// Topics We Will Understan/Learn

1. Hosting 

2. Hosting In Premitive Data Types And Non-Premitive Data Types

3. Difference Between var, let and const

*/

// 1. Hosting

/* var Key-Word */

console.log(name);

var name = "Hetuk Patel"

console.log(name);

// 2. Postion Of Assign

// This Will Follow A Legit Attandance

var number;

number = "65";

console.log(number)

// 3. Variable Leakage In var Key-Word

var another_number = "10"

for (var i = 0; i < 5; i++) {
    console.log(another_number);
    console.log(i);
}

console.log(i);

/* let Key-Word */

// 4. Leakage Handle By let Key-Word

for (let j = 0; j < 5; j++) {
    console.log(another_number);
    console.log(j);
}

console.log(j);

/* 5. Data Types */

// Data Types in JS classify the different kinds of values that variable can hold.

/*

// Premitive Data Types[Immutable]

1. String
2. Number
3. Boolean
4. Null
5. Undefine
6. BigInt
7. Symbol

// Non-Premitive Data Types[Mutable]
1. Object
2. Array

*/

// Premitive Data Types[Immutable]

let naam = "Hetuk Vinod Patel"