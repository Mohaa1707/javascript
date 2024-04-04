//var,let,const

var name = "Mohan";

name = "Raj"; //Re assinging the variable

console.log(name);

//INIT Variable

var greeting;
console.log(greeting);
//Error : Undefined

var greeting;
greeting = "Hello";
console.log(greeting); //initializing the variable

//Letter,_,$

//cannot start with number
// var 5Star = "Choco"
// console.log(5Star);
//Error: Uncaught syntax error : Invalid or unexcepted token

var star5 = "Choco";
console.log(star5);

// Multi words Vars

var firstname = "A";
var firstName = "B"; //camel case ***
var first_name = "C"; //snake case
var FirstName = "D"; //Pascal case ithu function and react component
//use panum pothu Pascal case use panuvom
var $firstName = "E"; //Dollar
console.log(firstName);

//let

// let newName;
// console.log(newName);
//Error: Undefined

let newName;
newName = "Moha";
newName = "Mohan raj"; //Re-assigning the value
console.log(newName);

//const

// const anothername;
// console.log(anothername);
//Error : Uncaught SyntaxError: Missing initializer in const declaration

//Always have to assign a value
// const anothername = "Mithran";
// console.log(anothername);

const anothername = "M";
anothername = "N";
console.log(anothername);
//Error : Uncaught TypeError: Assignment to constant variable.
