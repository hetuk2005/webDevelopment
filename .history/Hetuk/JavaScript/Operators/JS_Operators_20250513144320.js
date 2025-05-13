/* 1. Arithmethic  Operators */

/* 

1. + - Addition
2. - - Subtraction
3. * - Multiplication
4. / - Division
5. % - Modules (Remainder)
6. ** - Exponentional (Eg:- 2**3=8)
7. ++ - Increament
8. -- - Decrement

*/

//Using Basic Maths:-

// let num1 = 4;
// let num2 = 2;

// let sum = num1 + num2;

// console.log(sum);

// let sub = num1 - num2;

// console.log(sub);

// let multi = num1 * num2;

// console.log(multi);

// let div = num1 / num2;

// console.log(div);

// let modules = num1 % num2;

// console.log(modules);

// let exponentional = num1 ** num2;

// console.log(exponentional);

// num1++;

// console.log(num1);

// num2--;

// console.log(num2);


// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 ** num2);
// console.log(num1 % num2);
// console.log(num1++);
// console.log(num1);
// console.log(num1--);
// console.log(num1);
// console.log(num2++);
// console.log(num2);
// console.log(num2--);
// console.log(num2);

/* 2. Assignment Operators */

/*

1. = - Assign 
2. += - Add & Assign
3. -= - Subtract & Assign
4. *= - Multiply & Assign
5. /= - Divide & Assign
6. %= - Modules & Assign

*/

// let num3 = 7;
// 
// num3 += 3;
// 
// console.log(num3);

// 1. Describe The Difference Between Arithmethic & Assignment Operators In Javascript

// Answer:-1. In Arithmethic operator it just adds, substracts the one value to second value.
// 2. In Assignment Operator it adds operator and assign also it can be done through one value also.

// 2. List Any 5 Arithmetic Operators & Explain With Their Use With Examples.

// Answer:-
/*

1. Assign (=):-

It Is Used To Assign The Value

For Example:- let num3 = 7;

2. Add & Assign (+=):-

It Is USed To Add And Assign The Value

For Example:- let num3 = 7;

num3 += 3;

console.log(num3);

3. Subtract & Assign (-=):-

It Is Used To Subtract And Assign The Value

For Example:- let num3 = 7;

num3 -= 3;

console.log(num3);

4. Multiply & Assign (*=):-

It Is Used To Multiply And Assign The Value

For Example:- let num3 = 7;

num3 *= 3;

console.log(num3);

5. Division & Assign (/=):-

It Is Used To Divide And Assign The Value

For Example:- let num3 = 7;

num3 /= 3;

console.log(num3);

*/

// 3. Why Do We Use "+" Operator With Strings, And How Does It Behave Differently Compared To Numbers

// Answer:- If we use + operator with string it take both words or letters what you have given and join them and in number if we apply + operator it will add both numbers.

/* 3. Comparision Operators */

let num4 = 2;
let num5 = 3;

console.log("checking:", num4 == num5);
console.log("checking:", num4 == num5 - 1);

/*

1. == - Data Value
2. === - Data Type

*/

let num6 = "2";

console.log("checking:", num6 === num5);
console.log("checking:", num6 === num5 - 1);
console.log("checking:", num6 == num5 - 1);

console.log(typeof num6);
console.log(typeof num5);

/*

1. ! = - Data Value
2. ! == - Data Type

*/

let flag1 = false;
console.log(flag1 != true);

/*  Task */

num7 = 2
num8 = 3

// 1. !=

console.log(num4 != num5 - 1);

// 2. !==

console.log(num6 !== num5 - 1);

// 3. >

console.log(num5 > num4);

// 4. <

console.log(num4 < num5);

// 5. >=

console.log(num7 >= num4);

// 6. <=

console.log(num8 <= num5);

/* 4. Logical Operators */

/*

1. && - AND
2. || - OR
3. ! - NOT

*/

console.log(num4 == num5 - 1 && num6 == num4);
// console.log(true && true);

console.log(num4 == num5 - 1 || num6 != num5);
// console.log(true || false);

let flag2 = true;
console.log("flag2:", !flag2);

/* 5. String Operators */

/*

1. + - Concatination
2. += - Append String

*/

let name1 = "Hetuk";
let name2 = "Patel";

let full_name = name1 + " " + name2;
console.log("full_name:", full_name);

name1 += " " + name2;
console.log("name1:", name1);

/* 6. Continual (Ternary) Operators */

// condition ? true : false

let age = 13;

let voter_check = age > 18 ? "Eligable For Voting" : "Not Eligable For Voting";
console.log(voter_check);

/* 7. Type Operators */

let str = "Hetuk";
let num = 65;

console.log(typeof str);
console.log(typeof num);

/* 8. Spread And Rest Operators */

// Spread Operator

let arr = [1, 2, 3, 4];


let new_arr = [5, 6, 7, 8];

let final_arr = [arr + new_arr];
console.log(final_arr);

let final_arr1 = [arr, new_arr];
console.log(final_arr1);

let final_arr2 = [...arr, ...new_arr];
console.log(final_arr2);

let final_arr3 = [...arr, 5, 6, 7, 8];
console.log(final_arr3);

// Rest Operator

// let sum = (a, b, c);
let sum1 = (...args) => {
    // console.log("a:", a, b, c);
    console.log("args:", args);
};

sum1(1, 2, 3);

/* 9. Bit-Wise Operators */

// Converts Number Into Binary

let number = 65;

let binary = number.toString(2);

console.log("binary:", binary);

let binary1 = number.toString(6);

console.log("binary1:", binary1);

let binary2 = number.toString(8);

console.log("binary2:", binary2);

let binary3 = number.toString(16);

console.log("binary3:", binary3);

// Converts Binary Into Number

let number1 = parseInt(binary, 2);
console.log("binary:", binary);

//Conversion Number To String

let num65 = 65;
console.log("num65:", num65);

let new_data = num65.toString();
console.log("new_data:", new_data);
console.log("new_data:", typeof new_data);

let new_data1 = String(num65);
console.log("new_data:", new_data1);
console.log("new_data:", typeof new_data1);

let new_data2 = Number(new_data1);
console.log("new_data:", new_data2);
console.log("new_data:", typeof new_data2);

let str1 = "Hetuk Patel";

let ans = parseInt(str1);
// let ans = Number(str1);

console.log("ans:", ans);