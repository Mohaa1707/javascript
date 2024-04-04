// //selectors we have in a CSS

// Tag Selectors - ex:<h1> target</h1>
// Class Selectors - .
// id selectors - #

//document.getElementById();

//console.log(document.getElementById("task-title"));
//OP:<h5 class="test" id="task-title"> Tasks </h5>

//const taskTitle = document.getElementById("task-title");

//CHANGE STYLE:

//taskTitle.style.background = "blue";
//taskTitle.style.color = "#ffffff";
//taskTitle.style.padding = "10px";

//CHANGE TEXT

//taskTitle.innerText = "Hello Guys";
//taskTitle.innerHTML = "<p>Hello students</p>";

//We Using this Syntax:

//document.querySelector(""); //***

// console.log(document.querySelector("#task-title"));
// console.log(document.querySelector(".card-content"));
// console.log(document.querySelector("h5"));

//IN QUERY SELECTOR METHOD:

const taskTitle2 = document.querySelector("#task-title");

taskTitle2.style.color = "Blue";
taskTitle2.style.background = "orange";
taskTitle2.style.padding = "10px";
