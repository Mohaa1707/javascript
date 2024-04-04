function greet(whatToSay = "Hello", name = "Mohan") {
  //ES5 --- default parameters
  //if(typeof whatToSay === "Undefined"){whatToSay = "Hello"};
  //if(typeof name === "undefined"){name = "Mohan"}
  return `Greet : ${whatToSay} ${name}`;
}

//console.log(greet("Moha", "Mohan"));

//FUNCTIONS EXPRESSION

//add();
//Hositing
//Expression ah irutha intha function declare panathuku apram than call pannamudiyum.
const add = function (x = 5) {
  console.log(x + 5);
};

add();

//IIFE (Immediate invoked Function Expression)

const run = (function () {
  console.log("IIFE RUN");
})(); // It is a IIFE Function
//console.log(run()); // Its not a IIFE function
