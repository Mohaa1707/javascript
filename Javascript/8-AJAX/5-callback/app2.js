//CALLBACK - a function that is passed as an argument to another function.
//Synchronous - Oru execution nadanthathuku apram than inoru execution nadakum.
//Asynchronous :
//Used to Handle a asynchronous operations:
//1.Reading a file
//2.Network Request
//3.Interactive with database

// Hey when you're done , call this next - Na oru vishayam panni mudichatuku apram yenna call pannu.

// document.addEventListener("click", function () {
//   console.log("Hello");
// });

// EXAMPLE - 1:
// function hiLater() {
//   var greeting = "Hi";

//   setTimeout(function () {
//     console.log(greeting);
//   }, 3000);
// }

// hiLater();

// In this above code la hilater ingra parent function than var ngra greeting potu iruken , ithu poitu setTimeout
//ngra inner function la call panitu greeting ngra hi function queue la poi hang agitu irukum atha poi nama
//call pannuvom athan CLOSURE.

//EXAMPLE - 2

function tellMeWhenDone(callback) {
  var a = 1000;
  var b = 2000;
  callback();
  console.log(a);
  console.log(b);
}

tellMeWhenDone(function () {
  console.log("Hello");
  setTimeout(function () {
    console.log("Hi");
  }, 0);
});
