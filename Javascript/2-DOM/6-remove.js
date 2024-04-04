const list = document.querySelectorAll("li"); //NODE LIST - Array mari irukum ana array ila.

// list[0].remove();
// console.log(list);

//class and attribute

const firstLi = document.querySelector("li:first-child");
const link = firstLi.children[0];

let val;
val = link.className; //STRING
val = link.classList; //DOMTOKENLIST

// val = link.classList.add("Mohan");
// val = link.classList.contains("Raj");

// val.forEach(function (cls) {
//   console.log(cls);
// });
//val.add("Mohan");

val.forEach(function (cls, index) {
  console.log(`${cls} - ${index}`);
});
console.log(val);

console.log(link.classList);
