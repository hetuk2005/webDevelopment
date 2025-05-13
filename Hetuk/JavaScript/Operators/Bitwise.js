/* Bit-Wise

1. & - AND
2. | - OR
3. ~ - NOT

*/

let num66 = 14;

let num77 = 15;

let binary = num66.toString(2);
console.log("binary:", binary);

let binary1 = num77.toString(2);
console.log("binary1:", binary1);

let and = ~num66;
console.log("and:", and);

let and1 = ~num77;
console.log("and1:", and1);

let and2 = num66 & num77;
console.log("and2:", and2);

let and3 = num66 | num77;
console.log("and3:", and3);