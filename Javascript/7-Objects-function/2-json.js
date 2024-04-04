var objectiterals = {
  firstName: "jagan",
  isAprogrammer: true,
};

console.log(objectiterals); // It returns object

console.log(JSON.stringify(objectiterals)); //It returns stringfy format.

var jsonValue = JSON.parse(`{ "firstName": "javid", "isProgrammer": "true" }`);

console.log(jsonValue); // It returns object
