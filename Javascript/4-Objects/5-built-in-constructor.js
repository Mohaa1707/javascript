//String

const name = "Mohaneyyy";
const name2 = new String("Mohaneyyy");

console.log(name); //OUTPUT : Mohaneyyy
console.log(typeof name); //OUTPUT : string

console.log(name2); // String {'Mohaneyyy'}
console.log(typeof name2); //Object

//Number

const num1 = 0;
const num2 = new Number(1);
//console.log(num1);
//console.log(typeof num1);
//console.log(num2);
//console.log(typeof num2);

//Boolean:
const bool1 = true;
const bool2 = new Boolean(false);
//console.log(bool1);
//console.log(typeof bool1);
//console.log(bool2);
//console.log(typeof bool2);

//FUNCTION:
const getSum1 = function (x, y) {
  return x + y;
};

//console.log(getSum1(5,5));

//Object:
const Obj1 = { name: "Mohaneyyy" };
const Obj2 = new Object({ name: "Mohaneyyy" });

//console.log(Obj1);
//console.log(Obj2);

// Array:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = new Array(1, 2, 3, 4, 5);

//console.log(arr1);
//console.log(arr2);
