const clearBtn = document.querySelector(".clear-tasks");
//console.log(clearBtn);

//CLICK
//clearBtn.addEventListener("click", newEvent);

//DOUBLE CLICK
//clearBtn.addEventListener("dblclick", newEvent);

//MOUSE DOWN
//clearBtn.addEventListener("mousedown", newEvent);

//MOUSE UP
//clearBtn.addEventListener("mouseup", newEvent);

//MOUSE ENTER
//clearBtn.addEventListener("mouseenter", newEvent);

//MOUSE LEAVE
clearBtn.addEventListener("mouseleave", newEvent);

function newEvent(event) {
  console.log(`Mouse Type : ${event.type}`);
  console.log(event);
}
