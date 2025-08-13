//  What Is Constructor In JS?

// Basically What "new" Keyword/Operator Does Create Instance Of A User-Defined Object Type Of One Of The Build-In Object Type That Has A Constructor Function

// Constructor Function

function Car(make, model, year) {
  (this.make = make), (this.model = model), (this.year = year);
}

const car1 = new Car("toyota", "toyota", "1995");
const car2 = new Car("BMW", "SClass7", "2025");

console.log("Car 1: ", car1);
console.log("Car 2: ", car2);

const person = {
  name: "Hetuk",
  myFunc: function () {
    console.log(person.name);
  },
};

person.myFunc();

// Methods In Constructor

// 1. Call Method

let person2 = {
  name: "KL Rahul",
};

let person3 = {
  name: "Manoj",
};

function myFunction(age, city) {
  (this.age = age), (this.city = city);
}

myFunction.call(person2, 24, "Pune");
console.log(person2);

myFunction.call(person3, 24, "Nalasopara");
console.log(person3);

// 2. Apply Method

let person4 = {
  name: "Sai",
};

function myFunction1(age, city) {
  this.age = age;
  this.city = city;
}

myFunction1.apply(person4, [24, "Mahabaleshwar"]); //  Here We Will Give To Argument As A '[]' To Seperate And Send The Value
console.log("Person 4:", person4);

// Apply - Arrays
// Call - Commas

// 3. Bind Method

let person5 = {
  name: "Nilesh",
};

function myFunction2(age, city) {
  this.age = age;
  this.city = city;
}

let myBind = myFunction2.bind(person5, 24, "Dadar");

myBind(); // Here We Should Call The Function Whenever  We Needed

console.log("Person 5: ", person5);
