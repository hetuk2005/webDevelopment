/* Switch Case */

let key = true;

switch (key) {
    case 2 == 2:
        console.log(true);
    case 3 != 2:
        console.log(true);

        break;
    
    default:
        console.log(false);
}

let key1 = false;

switch (key1) {
    case 2 == 2:
        console.log(true);
    case 3 != 2:
        console.log(true);

        break;
    
    default:
        console.log(false);
}

// 1. Days Of Week

let key3 = 4;

switch (key3) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Holiday");
}

// 2. Simple Calculator

let num1 = 2;
let num2 = 3;
let operator = "-";

switch (operator) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        console.log(num1 / num2);
        break;
    default:
        console.log("You Have Not Given Operator");
}

// 3. Grade Evaluator

let grade = "B";

switch (grade) {
    case "A":
        console.log("Outstanding");
        break;
    case "B":
        console.log("Excellent");
        break;
    case "C":
        console.log("Good");
        break;
    case "D":
        console.log("Average");
        break;
    case "E":
        console.log("Pass");
        break;
    default:
        console.log("Fail");
}

// 4. Traffic Light System

let color = "green";

switch (color) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
            console.log("Slow Down");
        break;
    case "green":
            console.log("Go");
            break;
}

// 5. Season Detector

let month = 12;

switch (month) {
    case 1:
        console.log("This Month Is For Winter Season");
        break;
    case 2:
        console.log("This Month Is For Winter Season");
        break;
    case 3:
        console.log("This Month Is For Spring Season");
        break;
    case 4:
        console.log("This Month Is For Spring Season");
        break;
    case 5:
        console.log("This Month Is For Spring Season");
        break;
    case 6:
        console.log("This Month Is For Summer Season");
        break;
    case 7:
        console.log("This Month Is For Summer Season");
        break;
    case 8:
        console.log("This Month Is For Summer Season");
        break;
    case 9:
        console.log("This Month Is For Fall Season");
        break;
    case 10:
        console.log("This Month Is For Fall Season");
        break;
    case 11:
        console.log("This Month Is For Fall Season");
        break;
    case 12:
        console.log("This Month Is For Winter Season");
        break;
    default:
        console.log("You Have Not Entered Month");
}

// 6. Browser Support Checker

let name = "Edge";

switch (name) {
    case "Chrome":
        console.log("You Are Using Chrome Browser");
        break;
    case "Firefox":
        console.log("You Are Using FireFox Browser");
        break;
    case "Edge":
        console.log("You Are Using Edge Browser");
        break;
    case "Safari":
        console.log("You Are Using Safari Browser");
        break;
    case "Opera":
        console.log("You Are Using Opera Browser");
        break;
    default:
        console.log("Browser Not Supported");
}

// 7. Vowel Or Consonant

let letter = "i";

switch (letter) {
    case "a":
        console.log("It Is A Vowel");
        break;
    case "e":
        console.log("It Is A Vowel");
        break;
    case "i":
        console.log("It Is A Vowel");
        break;
    case "o":
        console.log("It Is A Vowel");
        break;
    case "u":
        console.log("It Is A Vowel");
        break;
    default:
        console.log("It Is A Consonant");
}