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