function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.getFullName = function () {
    return `${this.firstName}${this.lastName}`;
  };
}

const Moha = new Person("Mohan", "Raj");
const Sri = new Person("Sri", "mathi");
console.log(Moha);
console.log(Moha.getFullName());
console.log(Sri);
console.log(Sri.getFullName());

//vovoru function call getfullName call agitae irukku ithu space athigama pudikum.

//PROTOTYPE : Every object javascript has a built in object , this is called prototype.
