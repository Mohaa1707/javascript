// function Person(firstName, lastName) {
//   this.firstName = firstName;
// }

//IN JAVASCRIPT THIS KEYWORD IS REFERS TO OBJECT.

console.log(window); // WINDOW OBJECT SHOW PANNUM - {} iruthale athu object than.
console.log(this); // same - WINDOW OBJECT SHOW PANNUM - {} iruthale athu object than.
//window and this rendum javascript oda keyword.

function test() {
  console.log(this);
}

test();

// THE ABOVE CODE IS EXECUTE THE WINDOW OBJECT.

const obj = {
  test: "test from obj",
  objTest: function () {
    console.log(this);
  },
};
obj.objTest(); //It will return the method.

//-----------------------------------------------------------------
//Person - ithu function constructor athan namma function name Person la P caps la use panni irukom.
function Person(firstName, lastName) {
  console.log("Hello");
}
//OUTPUT : Hello varum.

//-------------------------------------------------------------------

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  //this poi windows ah pakathu object ah than pakum.
}

const person1 = new Person("Mohan", "Raj");
console.log(person1);
