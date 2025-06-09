/*  What Is Object? */

/* 

- Object literal denoted by this -> "{ }"
- JavaScript is based on object

*/

let car = {
    brand: 'aulto',
    model: '800',
    years: 1999,
    automation: {
        name: 'advance alto',
        model: '1200',
        years: 1800,
    },
    myFunc: function () {
        console.log("Hello");
    },
    hobbies: ['cod', 'gow', 'gta'],
    married: false,
};
console.log("Car: ", car);

// Dot Operator

console.log("Brand:", car.brand);

// For In Loop

for (let key in car) {
    console.log("Key: ", key);
    console.log("Value: ", car[key]);
}
