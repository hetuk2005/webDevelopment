/* Array Methods */

let arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Splice Method

// arry.splice(index_number_which_to_change, how_many_numbers_to_change_from_that_index, change_numbers);

arry.splice(2, 1, 23, 24);

arry.splice(2, 2, 23, 24);

console.log(arry)

// 2. Slice Method

// arry.slice(from_the_index_number_given_it_will_show_number)

// let arry1 = arry.slice(2);

// arry.slice(from_the_index_number_given_it_will_be_shown_number,end_index_number_will_be_shown)

// let arry2 = arry.slice(1,3);

console.log(arry1)
console.log(arry2)

// 3. Shift Method

arry.shift()

console.log(arry)

// 4. Unshift Method

arry.unshift(15)

console.log(arry)

// 5. toString

// let arry1 = arry.toString();

console.log(arry1)

// 6. join

// let arry1 = arry.join("-");

console.log(arry1)

// 7. delete

delete arry[1]

console.log(arry)

// 8. concat

let arry1 = [11, 12, 13];
let arry2 = [14, 15];

let arry3 = arry.concat(arry1, arry2);

console.log(arry3)

// 9. sort

let aary5 = [1, 23, 100, 2, 5, 4, 66];

let arry6 = aary5.sort((a, b) => a - b);
console.log(arry6);