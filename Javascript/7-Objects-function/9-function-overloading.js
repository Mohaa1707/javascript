function greet(firstName, lastName, language) {
  return `${firstName} ${lastName} ${language}`;
}

function tamilGreet(language) {
  return greet("Mohan", "Raj", language);
}

function englishGreet(language) {
  return greet("Mithran", "Raj", language);
}

console.log(tamilGreet("Vanakkam"));
console.log(englishGreet("Hola"));
