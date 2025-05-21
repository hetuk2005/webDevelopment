// 4. Guess The Number

let guessNumber = Math.floor(Math.random() * 10) + 1;
console.log("Number Is: ", guessNumber);

let userNumber = parseInt(prompt("Enter The Number: "));

while (guessNumber != userNumber) {
    userNumber = parseInt(prompt("Enter The Number: "));
}
console.log("This Is Your Guessed Number: ", guessNumber);