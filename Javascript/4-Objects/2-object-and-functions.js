// var person = new Object();
// var person2 = {}; // object literals
// console.log(person);
// console.log(person2);
//-----------------------------------------------

var person = new Object(); // creating a new object.
person["firstName"] = "Mohan"; //Object la iruthu oru value va get panrathu - 1st syntax.
person["lastName"] = "Raj";
person.age = 24; //2nd syntax  ****
person.address = new Object();
person.address.street = "31 Mannar samy kovil street";
person.address.city = "Tindivanam";
person.address.state = "TamilNadu";

//OBJECT - Objects is the collection of Name & value or Key & value pairs. ***

//object kulla :
//1) - primitive("property")
//2) - Object("property")
//3) - function("Method") irukku.

//Oru object kulla string,number,object irutha athaan property.
//Oru object kulla function call pannah athaan Method.

//METHOD:
person.getFullName = function () {
  return `${person.firstName} ${person.lastName}`;
};
console.log(person);
console.log(person.address.state);
console.log(person.getFullName); // function output ah varum.
// So function execute pananum na function ah call pananum.
console.log(person.getFullName());

//USING THIS

person.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

//
//this poi actual object ah than pakum
