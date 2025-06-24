// Map Method

// 1. Capatizing Each Letter Of An Array

let string = ['hetuk', 'mehfooz', 'farhan', 'khushi'];

let arr = string.map((element, index) => {
    return element.charAt(0).toUpperCase() + element.slice(1);
    //  chartAt(0) - It Takes 1st Character Because Of 0;
    // to.UpperCase() - Makes The Character Uppercase Which Has Given In The charAt(0)
    // slice(1) - Gives Remainder Of The String 
});
console.log(arr);

// 2. Convert Numbers Into Squares

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let arr1 = num.map((element, index) => {
    return Math.pow(element, 2);
})

console.log("Sqaures: ", arr1);

// 3. Product Object Returning Only Product Name

let product = [
    { Shoes: 'Nike' },
    {Bike: 'Hero Honda'},
    { Car: 'Rolls Royals' }
]

let arr2 = product.map((element, index) => Object.values(element));
console.log("Product Name: ", arr2);

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

// 2. No Loger Than 5 Characters

let ans2 = string.filter((element, index) => {
    return element.length > 5;
})
console.log('Name: ', ans2);

// 3. Students Who Scored Above 75%

let students = [71, 75.5, 75.3, 76, 86, 90];

let ans3 = students.filter((element, index) => {
    return element > 75;
})
console.log('Marks Above 75%: ', ans3);

// 4. Returns Only String Staring With Character A

let string2 = ['hetuk', 'mehfooz', 'ajay', 'arun'];

let ans4 = string2.filter((element, index) => {
    return element.charAt(0) == 'a';
})
console.log('Name Starting With A: ', ans4);

// 5. Filter All Falsy Values

let falsy = ['Hetuk', null, 0, 1, false, 2, 3, true, 999, 100, undefined];

let ans5 = falsy.filter(Boolean);
console.log('Filtered All Falsy Values: ', ans5);

// Reduce

// 1. Calculate The Total Sum Of An Array

let arr4 = num.reduce((acc, curr) => acc + curr);
console.log(arr4);

// 2. Combine A String To Make Sentence

let sentence1 = ['Hello'];
let sentence2 = ['World'];

let sentence = sentence1.concat(sentence2).reduce((acc, curr) => acc + ' ' + curr);
console.log('Final Sentence: ', sentence);

// 3. Total Price For Object

let obj = [
    { Apple: 95 },
    { GreenApple: 100 },
    { PineApple: 70 }
];

let price = obj.reduce((acc, curr) => acc + Object.values(curr)[0], 0);
// Object.values(curr)[0] - Extracts Price, 0 - It Gives Number For Addition
console.log(price);

// 4. How Many Times Each Item Appears

// let name = ['Hetuk', 'Pratham', 'Hetuk', 'Hrishi'];

// let repeat = name.reduce((acc, curr) => {
//     return
// })

// 5. Find Maximum Numbers

let max = students.reduce((acc, curr) => Math.max(acc, curr));
console.log("Maximum Number: ", max);