document.querySelector(".container").innerHTML = count;
clearBtn = addEventListener("click", onClick);

function onClick() {
  count = count + 1;
  document.querySelector(".container").innerHTML = count;
  const card = document.querySelector(".container");
  const cardClass = card.classList;
  if (count % 2 === 0) {
    cardClass.add("rest");
    cardClass.remove("rest-2");
  } else {
    cardClass.add("rest-2");
    cardClass.remove("rest");
  }
}
