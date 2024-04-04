// let val;

// const list = document.querySelector(".collection"); //UL

const listItem = document.querySelector("ul>li:first-child");
console.log(listItem);

// val = list;
// val = list.childNodes;
// val = list.childNodes[1].nodeName;
// val = list.childNodes[0].nodeType;

// 1 - Element
//3 - Text node
//8 - Comment

//Get the childrens of element
// val = list.children; // ***
// val = list.children[0];
// val = list.children[1];
// val = list.children[1].innerText;
// val = list.children[1].children[0].children[0];

// //first child
// val = list.firstChild;
// val = list.firstElementChild; //***

//Last child
// val = list.lastChild;
// val = list.lastElementChild;

//Get a Parent Element
val = listItem.parentElement.parentElement.parentElement.parentElement;

val = list.parentElement;

//Get a next sibling

val = listitem.nextsibling;
val = listitem.NextElementSibling.NextElementSibling;

//Get a previous sibling
val = listItem.previousElementSibling;
val = listItemofLast.previousElementSibling;
console.log(val);
