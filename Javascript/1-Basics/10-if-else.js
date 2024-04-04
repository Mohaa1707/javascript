// if(something){
//     do something
// } else{
//     do something else
// }

//Equal to value

if (100 == "100") {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}

//Not equal to value

if (100 != "100") {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}

//Equal to the value && type

if (100 === "100") {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}
//OP : INCORRECT

if (100 === 100) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}
//OP : CORRECT

if (100 !== 100) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}
//OP : INCORRECT

//Test if Undefined

let greet;
if (typeof greet === "undefined") {
  console.log(`False ${greet}`);
} else {
  console.log(`True ${greet}`);
}

let greet1;
greet = "Vanakkam";
if (typeof greet === "undefined") {
  console.log(`False ${greet}`);
} else {
  console.log(`True ${greet}`);
}

//Greater or less than

if (100 >= 99) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}

const color = "blue";

if (color === "red") {
  console.log("Color is red");
} else if (color === "blue") {
  console.log("Color is blue");
} else {
  console.log("Color is mismatch");
}

// Logical operator

const name = "Mohanraj";
const age = 24;

// And - && check the both values

if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teen`);
} else {
  console.log(`${name} is a adult`);
}

// OR - || check only one true or false

if (age < 16 || age > 60) {
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} can not run the race`);
}

//Ternary operator

console.log(100 === 100 ? "CORRECT" : "INCORRECT");
