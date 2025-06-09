
/* TASKS */

// 1. Create A Person Object

let greet={
    name: 'Hetuk Patel',
    age: 19,
    gender: 'Male',
};
console.log("Hello, my name is", greet.name);

// 2. Add/Update/Delete Proprities

let car1 = {
    make: 'Aulto',
    model: '800',
    year:'1999',
}
console.log("CAR1: ", car1);

car1.color = 'Red';
car1.year = 2000;
delete car1.model;
console.log("Updated Info: ", car1);

// 3. Loop Through An Object

let fruit = {
    Apple: '500gm',
    Grapes: '1kg',  
    Pineapple: 1,
};

for (let key in fruit) {
    console.log("Fruit Name: ", key);
    console.log("Quantity: ", fruit[key]);
}

// 4. Check If A Key Exists. Write A Function haskKey(obj,key) That Returns True If Exists

let car = {
    brand: 'aulto',
    model: '800',
    years: 1999,
    automation: {
        name: 'advance alto',
        model: '1200',
        year: 1800,
    },
    myFunc: function () {
        console.log("Hello");
    },
    hobbies: ['cod', 'gow', 'gta'],
    married: false,
};

function hasKey(obj, key) {
    let flag = false;
    for (let val in obj) {
        if (val === key) {
            flag = true;
        }
    }
    return flag;
}

let ans = hasKey(car, 'married');
console.log('ans: ', ans);

// 5. Object Destructuring

const { model, brand, year, ...rest } = car;
console.log('Brand', brand);
console.log('Model', model);
console.log('Year', year);
console.log('rest', rest);

// 6. Factory Function

function createBook(title, author, year) {
     this.title=title;
     this.author=author;
     this.year=year;
}

const Book = new createBook('Rich Dad Poor Dad', 'XYZ', 1997);
console.log("Book: ", Book);

class createBook1{
    constructor(title, author, year) {
        this.title=title;
        this.author=author;
        this.year=year;
    }
}
const Book1 = new createBook1('Rich Dad Poor Dad', 'XYZ', 1997);
console.log("Book: ", Book1);
const Book2 = new createBook('Harry Potter', 'XYZ', 2000);
console.log("Book: ", Book2);


// 7. Nested  Object

let student = {
    name: 'Hetuk',
    address: {
        city: 'Mumbai',
        zip:401203,
    },
    grades: {
        maths: 90,
        science:70,
    },
}

console.log("City: ", student.address.city);