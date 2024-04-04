// function Expression
// const sayHello = function () {
//   console.log("Hello");
// };

//sayHello();

//Arrow function - syntactic sugar - ES6

// const sayHello = () => {
//   console.log("Hello");
// };
// sayHello();

//ONE LINE FUNCTION DOES NOT NEED A BRACES

// const sayHello = () => console.log("Hello");

//TWO STATEMENT NEED A BRACES

// const sayHello = () => {
//   console.log("Hello");
//   console.log("Hai");
// };
// sayHello();

//one line return
//ES6
// const sayHello = () => "Hello";
// console.log(sayHello());

//ES5
// const sayHello = function () {
//   return "Hello";
// };
//console.log(sayHello());

//return a object

// const sayHello = () => ({ msg: "Hello" });

// console.log(sayHello());
//------------------------------------------------------------------

//SINGLE PARAM DOESN'T NOT NEED A PARANTHESIS:

// const sayHello1 = (name) => console.log(`Hello ${name}`);
// sayHello1("Mohan", "Raj");
// const sayHello = (firstName, lastName) =>
//   console.log(`Hello ${firstName} ${lastName}`);
// sayHello("Mohan", "Raj");
//-----------------------------------------------------------------

//USERS

// const users = ["Mohan", "Raj", "Murugan"];

// users.forEach(function (user) {
//   console.log(user);
// });

// //This single param doesnt need a curly braces
// users.forEach((user) => {
//   console.log(user);
// });

// //This is correct correct way:
// users.forEach((user) => console.log(user));

// users.forEach((user, index) => {
//   console.log(`${index} - ${user}`);
// });

//-----------------------------------------------------------------------------
