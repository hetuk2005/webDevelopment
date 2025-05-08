// Data Type In JavaScript the kind of value a variable can hold. They are mainly divided into 2 categories: Primitive And Non-Primitive Data Types

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

// 1. Premitive Data Type

let name = "Hetuk"; // String

let number = 65; // Number

let boolean = false; // Boolean

let money = null; // Null

let paisa = undefined; //Undefined

let BigInt = 123456789012345678768757647675674747676764 n; // BigInt

let symbol = Symbol("id"); // Symbol

console.log(typeof BigInt);

// 2. Non-Premitive Data Type

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let value = {
    name: "Hetuk",
    age: 19,
    married: false,
    hobbies: ["Cricket", "Free Fire", "Anime"],
};

console.log(value);