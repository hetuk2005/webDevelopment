// Map Method

// 1. 

let string = ['hetuk', 'mehfooz', 'farhan', 'khushi'];

// let arr = string.map((element, index) => element);
// console.log(arr);

// 2. Convert Numbers Into Squares

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let arr1 = num.map((element, index) => {
    return Math.pow(element, 2);
})

console.log("Sqaures: ", arr1);

// 3. Product Object Returning Only Product Name

// let product = {
//     Shoes: 'Nike',
//     Bike: 'Hero Honda',
//     Car: 'Rolls Royals'
// }

// let arr2 = product.map((element, index) => element);
// console.log("Product Name: ", arr2);

// 4. Return Length

let string1 = string.map((element, index) => element.length);
console.log("Lenght: ",string1);

// 5. Given Birth Years Return Ages

let num1 = [2004, 2005, 2006, 2007, 2008, 2009, 2010];

let ans = num1.map((element,index) => 2025 - element);
console.log("Age: ", ans);

// Filter Method

// 1. Given String Return Even Numbers

let num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let ans1 = num2.filter((element, index) => {
    return element % 2 == 0;
})
console.log("Even Numbers: ", ans1);
