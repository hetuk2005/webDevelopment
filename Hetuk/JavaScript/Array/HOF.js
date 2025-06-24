let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let string = ['Hetuk', 'Mehfooz', 'Farhan', 'Khushi'];

// 1. Map

// Same As Loop But It Will Return As Array

let arr = array.map((element, index) => element);
console.log(array);

// 2. ForEach

// Same As Loop But It Will Never Return As Array, It Will Show 'undefined'

let arr1 = array.forEach((element) => {
    console.log(element);
});
console.log(arr1);

// 3. Filter

let array1 = [1, 2, 3, 4, 7, 6, 7, 6, 9];

let arr3 = array1.filter((element, index) => {
    return element !== 7;
});
console.log(arr3);

// 4. Reduce

let arr4 = array.reduce((acc, curr) => acc + curr);
console.log(arr4);

// 5. Reducer

let createSumReducer = (prop) => {
    return (acc, obj) => acc + obj[prop];
};

let items = [
    { name: 'Apple', price: 95 },
    { name: 'GreenApple', price: 100 },
    { name: 'PineApple', price: 70 }
];

let totalprice = items.reduce(createSumReducer('price'), 0);
console.log("Total Price: ", totalprice);