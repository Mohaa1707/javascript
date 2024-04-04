function greet(whattosay) {
  return function (name) {
    console.log(name);
  };
}

greet()("Moan");

//------------------------------------------

function greet(whattosay) {
  return function (name) {
    console.log(whattosay + " " + name);
  };
}

var SayHi = greet("Hi");
SayHi("Tony");

//closure na oru function la irukka funtion execution ana piragum antha
//(whattosay) nra param apdiye vechi irukum , athan anthaa Hi
//SayHi("Tony")
//Hi Tony ngrathu varum.
