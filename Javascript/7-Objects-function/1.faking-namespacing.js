//const test = new Object(); //object
//const test2 = {}; //object iterals
//----------------------------------------------------

var english = {
  greet: "Hello",
};

var tamil = { greet: "Vanakkam" };
console.log(english.greet);

console.log(tamil.greet);

var languages = {
  engilsh: {
    greet: "Hello",
  },

  tamil: {
    greet: "Vanakkam",
  },
};

//Adding another language
languages.spain = {
  greet: "Hola",
};

console.log(languages);
