// document.getElementsByClassName();

//const items = document.getElementsByClassName("collection-item"); //HTML COLLECTION

//console.log(items);   //foreach ngra method protype la irukathu

//items[0].style.background = "Blue";
//convert to array

//let lists = Array.from(items);
// lists.foreach(function (element) {
//   console.log(element);
// });

//QUERY SELECTOR:

//document.querySelectorAll();

const listItems = document.querySelectorAll("li"); //foreach ngra method protype la irukum
console.log(listItems);

listItems.forEach(function (element) {
  console.log(element);
});
