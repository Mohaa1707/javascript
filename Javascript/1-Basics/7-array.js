const numbers = [1, 2, 3, 4, 5];

const fruits = ["Apple", "Kiwi", "Orange"];
let val;
val = numbers;

// //Get a array length
// val = numbers.length;
// // check it is array
// val = Array.isArray(numbers);
// //Get a single value
// val = numbers[0];

// //Insert into array
// val = numbers[1] = 39;
// console.log(numbers);

// //Find the index of value
// val = numbers.indexOf(6);
// if array match is return the index number else return -1

//Mutating array
//Add on the end
//val = numbers.push(10);

//add on the front
//numbers.unshift(200);

//Take of from the end
//numbers.pop();
// numbers.pop();

//Take of from the front
//numbers.shift();

//Splice = remove & add
//TO REMOVE
//val = fruits.splice(0, 0);
//Ans:["Apple", "Kiwi", "Orange"];
//val = fruits.splice(0, 2);
//ans:[Orange]
//val = fruits.splice(0, 1);
//Ans : [Kiwi,Orange]
//val = fruits.splice(1, 1);
//Ans:[Apple,orange]

//TO ADD
//fruits.splice(0, 1, "Lemon");
//ans: ["Lemon", "kiwi", "Orange"];

//Reverse the array

val = numbers.reverse();

console.log(fruits);
