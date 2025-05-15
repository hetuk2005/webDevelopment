/* 1. For Loop */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log("arr:", arr.length);

for (let i = 0; i < arr.length; i++){
    console.log("i:", arr[i]);
}

// 1. Print Numbers From 1 To 10

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let j = 0; j < arr1.length; j++){
    console.log("j:", arr1[j]);
}

// 2. Print Even Numbers From 1 To 20

let arr2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

for (let a = 1; a<20; a+=2){
    console.log("Even Numbers:", arr2[a]);
}

// 3. Sum Of First N Numbers

let b = 5;
let sum = 0;

for (let n = 1; n <= b; n++){
 sum += n;
    console.log("Sum Of First Five Numbers Is:", sum);
}

// 4. Print Multiplication Number

let sum1 = 5;

for (let m = 1; m <= 10; m++){
    console.log(sum1*m);
}

// 5. Reverse Counting

let arr3=[10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

for (let r = 0; r < arr3.length; r++){
    console.log("Reverse Counting: ", arr3[r]);
}

// 6. Factorial Of A Number

let sum2 = 1;

for (let f = 1; f <= 5; f++){
    sum2 *= f;
}

console.log("Factorial Number: ", sum2);

// 7. Fibonacci Series

let y = 1;
let x = 0;
let next;

console.log("Fibonacci Series: ", x);
console.log("Fibonacci Series: ", y);

for (let s = 2; s < 5; s++){
    next = x+y;
    console.log("Fibonacci Series: ", next);
    x = y;
    y = next;
}

// 8. Triangle Pattern

let row = 5;

for (let t = 1; t <= row; t++){
    let star = "";
    for (let p = 1; p <= t; p++){
        star += "*";
    }
    console.log(star);
}