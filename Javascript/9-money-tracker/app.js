const person = (function () {
  const firstName = "Mohan";
  const lastName = "Raj";

  return {
    getFullname: function () {
      return firstName + " " + lastName;
    },
  };
})();

const person2 = (function () {
  const firstName = "Mohan";
  const lastName = "Raj";

  return {
    getFullname: function () {
      return firstName + " " + lastName;
    },
  };
})();

console.log(person.getFullname());
console.log(person2.getFullname());
