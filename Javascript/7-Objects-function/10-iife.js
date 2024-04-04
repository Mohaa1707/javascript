//Function statement

function greet(name) {
  console.log("Hello " + name);
}
greet("Mohan");

//Function expression

var greetFunc = function (name) {
  console.log("Hello " + name);
};
greetFunc("Mohan");

//immediately invoked function expression:

(function (name) {
  var greeting = "Inside IIFE  : Hello";

  console.log(greeting + " " + name);
})("Mohan");

var greeting = "Vanakkam";
console.log(greeting);
