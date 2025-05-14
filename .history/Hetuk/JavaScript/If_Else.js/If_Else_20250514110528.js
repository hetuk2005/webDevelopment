// 1. Movie Ticket Price Discount

let age = 10;
let age1 = 35;
let age2 = 65;

if (age < 12) {
    console.log("You Are Eligiable For Child Discount");
}
if (age2 >= 60) {
    console.log("You Are Eligiable For Senior Discount");
} else {
    console.log("You Are Not Eligiable For Any Discount");
}

console.log("age = ", age);
console.log("age1 = ", age1);
console.log("age2 = ", age2);

// 2. Grading System

let score = 92;
let score1 = 76;
let score2 = 58;

if (score >= 90) { console.log("Your Grade Is A"); }
if (score1 >= 89) { console.log("Your Grade Is B"); }
if (score1 <= 79) { console.log("Your Grade Is C"); }
if (score2 >= 60) { console.log("Your Grade Is D"); } else { console.log("You're Fail"); }

console.log("score = ", score);
console.log("score1 = ", score1);
console.log("score2 = ", score2);

// 3. Login System

let correctedUsername = "admin";
let correctedPassword = "12345";

let enteredUsername = "admin";
let enteredUsername1 = "user";
let enteredUsername2 = "admin";

let enteredPassword = "00000";
let enteredPassword1 = "12345";
let enteredPassword2 = "12345";

if (enteredUsername == correctedUsername && enteredPassword1 == correctedPassword) { console.log("Login Successful"); }
if (enteredUsername2 == correctedUsername || enteredPassword == correctedPassword) { console.log("Incorect Password"); }
if (enteredUsername1 == correctedUsername || enteredPassword1 == correctedPassword) { console.log("Incorect Username"); } else { console.log("Login Failed"); }

console.log("enteredUsername = ", enteredUsername, "enteredPassword = ", enteredPassword);
console.log("enteredUsername1 = ", enteredUsername1, "enteredPassword1 = ", enteredPassword1);
console.log("enteredUsername2 = ", enteredUsername2, "enteredPassword2 = ", enteredPassword2);