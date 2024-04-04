const num1 = 100;
const num2 = 200;

let val;

//simple math with number
val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;

console.log(val);

//math object
val = Math.PI;
val = Math.round(3.3);
val = Math.ceil(2.1); //Upper Number
val = Math.floor(2.1); //Lower Number
val = Math.sqrt(64);
Val = Math.abs(-5); //always return a positive value

val = Math.min(-6, 2, 3, 4, 5, 6);
val = Math.max(-6, 2, 3, 4, 5, 7);

val = Math.random();

val = Math.floor(Math.random() * 10);

console.log(val);
