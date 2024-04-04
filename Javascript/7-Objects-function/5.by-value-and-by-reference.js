// by value (primitive type)

var a = 5;
var b;
b = a;
a = 3;
console.log(a);
console.log(b);

//by Referene type

var c = {
  greeting: "Hi",
};

var d;
d = c;
d.greeting = "Hello";

c = {
  greeting: "Hola", //It returns Hola - Because equals always return a value.
};
console.log(c);
console.log(d);
