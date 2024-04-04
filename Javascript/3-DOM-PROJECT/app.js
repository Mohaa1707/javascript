//Define UI Variables

const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection"); //ul
const clearbtn = document.querySelector(".clear-tasks");
//console.log(form, taskInput, taskList, clearbtn);

//LOAD ALL EVENT LISTENERS:
function loadEventlisterners() {
  //Add task Event
  form.addEventListener("submit", addTask);
  //Add a clear event
  clearbtn.addEventListener("click", clearTasks);
  //Add Event to UL
  taskList.addEventListener("click", removeItem);
}

function addTask(event) {
  event.preventDefault();

  if (taskInput.value === "") {
    alert("Fill the field");
  } else {
    //create a li element
    const li = document.createElement("li");
    //Add class name
    li.className = "collection-item";

    //Create text node
    li.appendChild(document.createTextNode(taskInput.value));

    //Create a link
    const link = document.createElement("a");

    //Add class to link
    link.className = "delete-item secondary-content";

    //Add icon

    link.innerHTML = `<i class="fa fa-remove"></li>`;
    //Append link to li
    li.appendChild(link);

    //Append link to li
    taskList.appendChild(li);

    storeTaskInLocalStorage(taskInput.value);
    taskInput.value = "";
  }
}

function storeTaskInLocalStorage(task) {
  let tasks;
  //console.log(tasks);
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  //console.log(tasks);
}

function removeItem(event) {
  //console.log(event);
  console.log(event.target.parentElement.className);
  if (
    event.target.parentElement.className === "delete-item secondary-content"
  ) {
    event.target.parentElement.parentElement.remove();
    //console.log(event.i.a.li)
  } //else {
  //console.log("Im not delete to li");
  //}
  removeTaskFromLocalStorage(event.target.parentElement.parentElement);
}

function removeTaskFromLocalStorage(taskElement) {
  let tasks;

  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  // console.log(taskElement);
  // console.log(taskElement.innerText);

  tasks.forEach(function (task, index) {
    if (taskElement.innerText === task) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displaynames(tasks) {}

function clearTasks() {
  //console.log(taskList.innerHTML);
  taskList.innerHTML = "";
}

loadEventlisterners();

// console.log(localStorage);
// localStorage.setItem("Goat", "test");
// console.log(localStorage.getItem("Goat"));
// localStorage.removeItem("Goat");

/* <li class="collection-item">
                List Item 1
                <a href="#" class="delete-item secondary-content test" title="im Link">
                  <i class="fa fa-remove"></i>
                </a>
              </li> */
