const firstName = "Mohan";
const lastName = "Raj";
const age = 24;
const str = "Hello im Mohanraj and im a web dev";
const tag = "Web Dev, Movie freak, Cooking";
let val;

val = firstName + lastName;
// concatenation
val = firstName + " " + lastName;

//Append
val = "John";
//val = val + "Doe";
//another way
val += "Doe";

val = "Hello, My name is " + firstName + " and I am " + age;

//Concat using method
val = firstName.concat(" ", lastName);

//Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

//Get a index of index
val = firstName[0];
val = firstName[firstName.length - 1];

// Get a length of string
val = firstName.length;

//CharAt()
val = firstName.charAt("4");

//slice()
const fruit = "Apple";
val = fruit.slice(1, 3);

//split()
val = str.split("");
val = tag.split(",");
//val = tag.split(char, index, array);

//Replace
val = str.replace("Mohan", "Raj");
console.log(str);

//include
val = str.includes("Mohan");
console.log(val);
