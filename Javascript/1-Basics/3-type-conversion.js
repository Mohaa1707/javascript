// let val;

// //Number to string
// val = String(555);
// val = String(5 + 5);
// console.log(val);
// console.log(typeof val);

// //bool to string
// val = String(true);
// console.log(val);

// //Arr to array
// val = String([1, 2, 3, 4, 5, "Hello"]);
// console.log(val);
// console.log(typeof val);

// //String to number
// val = number("5+5"); //Not a number

// console.log(val);
// console.log(typeof val);
//Error : 3-type-conversion.js:19 Uncaught ReferenceError: number is not defined

//bool to number
// val = number(true);
// val = number(false);
// val = number(null);
// val = number("Hello"); //Nan
// val = number([1, 2, 3, 4, 5, "Hello"]); //Nan

val = parseInt("100.25");
val = parseFloat("100.25");

console.log(val);
console.log(typeof val);
