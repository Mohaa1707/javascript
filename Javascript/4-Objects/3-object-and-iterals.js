var person = {
  firstName: "Mohan",
  lastName: "Raj",
  age: 26,
  address: {
    street: "31 Mannar samy kovil street",
    city: "Tindivanam",

    State: "TamilNadu",
  },

  getFullName: function () {
    // return `${person.firstName} ${person.lastName}`;
    return `${this.firstName} ${this.lastName}`; //using this keyword
  },
};

console.log(person.getFullName());
