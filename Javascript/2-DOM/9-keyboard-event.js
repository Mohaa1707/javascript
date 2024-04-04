const taskInput = document.querySelector("#task");
//taskInput.addEventListener("keydown", runEvent);
//taskInput.addEventListener("keyup", runEvent); //****/
//taskInput.addEventListener("focus", runEvent);
//taskInput.addEventListener("blur", runEvent);
//taskInput.addEventListener("cut", runEvent);
//taskInput.addEventListener("copy", runEvent);
//taskInput.addEventListener("paste", runEvent);

function runEvent(event) {
  console.log(`event type : ${event.type}`);
  console.log(event.target.value);
  //document.body.style.background = "red";
}
