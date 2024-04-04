const person = {
  //property
  firstName: "Mohan",
  lastName: "Raj",
  age: 24,
  email: "mm@gmail.com",
  hasKids: false,
  hobbies: ["Coding", "Movies"],
  address: {
    city: "Chennai",
    state: "Tamilnadu",
  },
  //Method
  getFullName: function () {
    return person.firstName + " " + person.lastName; //this wrong syntax
  },
};

let val;
val = person;

//Get a specific value
val = person.firstName; //***
val = person["lastName"];
val = person.age;
val = person.email;
val = person.hasKids;
val = person.hobbies;
val = person.hobbies[0];
val = person.address;
val = person.address.city;
val = person.getFullName();
console.log(val);
