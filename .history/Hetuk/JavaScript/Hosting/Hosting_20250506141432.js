//Hosting

/*
Hosting 

Hosting In Premitive Data Types And Non-Premitive Data Types

Difference Between var, let and const
*/

console.log(name);

var name = "Hetuk Patel"

console.log(name);

// Postion Of Assign

//This Will Follow A Legit Attandance

var number;

number = "65";

console.log(number)

//Variable Leakage In var Key-Word

var another_number = "10"

for (var i = 0; i < 5; i++) {
    console.log(another_number);
    console.log(i);
}

console.log(i);

for (let j = 0; j < 5; j++) {
    console.log(another_number);
    console.log(j);
}

console.log(j);