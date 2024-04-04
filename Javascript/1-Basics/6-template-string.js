const name = "Mohan";
const age = 24;
const job = "Web dev";
const city = "Chennai";
let val;

//Without template strings

val =
  "My name is " +
  name +
  " " +
  "im" +
  " " +
  age +
  " " +
  "my job is" +
  " " +
  job +
  " " +
  "Im from" +
  " " +
  city;

// Template strings //ES6
val = `My name is ${name} im ${age} im job is ${job} im from ${city}`;
console.log(val);
