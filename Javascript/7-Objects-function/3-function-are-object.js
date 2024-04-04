function greet() {
  console.log("hi");
}
greet();

greet.language = "Tamil";
console.log(greet.language);

//------------------------------------------------------
var a = function () {
  console.log("Hello");
};

function test(a) {
  a();
}

test(a);
