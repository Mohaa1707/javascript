//create element

//const li = document.createElement("li");

// //Add Class
// li.className = "collection-item";
// //Add id
// li.id = "test";
// //Add Attribute
// li.setAttribute("id", "text");

// //create a text node
// li.appendChild(document.createTextNode("Hello World"));

// //create a new link element
// const link = document.createElement("a");
// //add class to link
// link.className = "delete-item secondary-content";

// //add icon html
// link.innerHTML = `<li i class="fa fa-remove"></i> `;
// link.appendChild(link);
// document.querySelector("ul").appendChild(li);
// document.querySelector;
// console.log(li);

//-----------------------------------------------------------------
//Create Element practice on 01-03-2024

const li = document.createElement("li");
//Add class
li.className = "collection-item";

//add id
// li.id = "test";
// console.log(li);
//Another way
//Add attribute
li.setAttribute("id", "test");

//create a next node
li.appendChild(document.createTextNode("Hello world"));

//create a new link element
const link = document.createElement("a");

//Add a class to link
link.className = "delete-item secondary-content";

//Add icon html
link.innerHTML = `<i class="fa fa-remove"></i>`;

li.appendChild(link);

document.querySelector("ul").appendChild(li);

console.log(li);
