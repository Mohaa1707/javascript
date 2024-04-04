document.querySelector(".clear-tasks").addEventListener("click", function () {
  //   alert("I got a click");
  console.log("I got a click");
});

let count = 0;
const clearBtn = document.querySelector(".clear-tasks");
//const title = document.querySelector("#task-title");

document.querySelector("#task-title").innerHTML = count;
clearBtn.addEventListener("click", onClick);

function onClick() {
  count = count + 1;
  // Shorthand count += 1;
  //or count ++;
  //console.log(count);
  //cardClass.remove("card-action");
  document.querySelector("#task-title").innerHTML = count;

  const card = document.querySelector(".card-action");
  const cardClass = card.classList;
  // cardClass.add("rest");
  //cardClass.toggle("rest");
  if (count % 2 === 0) {
    cardClass.add("rest");
    cardClass.remove("rest-2");
  } else {
    cardClass.add("rest-2");
    cardClass.remove("rest");
  }
}

//DOMToken List:

// const card = document.querySelector(".card-action").classList;
// console.log(card);
