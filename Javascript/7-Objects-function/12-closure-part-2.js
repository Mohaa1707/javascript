function buildFunction() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }
  return arr;
}
const fs = buildFunction();

fs[0](); //output - 3
fs[1](); // 3
fs[2](); // 3

// ES5 Concept - Using IIFE

function buildFunction2() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(
      (function (j) {
        console.log(j);
      })(i)
    );
  }
  return arr;
}

var fs1 = buildFunction2();
fs[0];
fs[1];
fs[2];
