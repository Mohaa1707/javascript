// document.querySelector("#button-1").addEventListener("click", getText);

// function getText() {
//   fetch("text.txt").then((res) => {
//     console.log(res);
//   });
// }
//------------------------------------------------------------------------------------------------

//Fetch yeppaiyumae promise ah than return pannum. - So athunala namma then and catch use pannum.
//console.log(fetch("text.txt"));

//-------------------------------------------------------------------------------------------------

// Button 1

document.querySelector("#button-1").addEventListener("click", getText);

function getText() {
  fetch("text.txt")
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

//fetch use pannah rendu then irukanum , onu response inonu data.

//-------------------------------------------------------------------------------------------------------------

//button-2 - getJson

const showOutput = document.querySelector("#output");

document.querySelector("#button-2").addEventListener("click", getJson);

function getJson() {
  fetch("posts.json")
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      let output = "";
      data.forEach(function (post) {
        output += `<li>${post.title}</li>`;
      });
      document.querySelector("#output").innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
}
//-----------------------------------------------------------------------------------------------------------------

document.querySelector("#button-3").addEventListener("click", getExternal);

function getExternal() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      let output = "";
      data.forEach(function (post) {
        output += `<li>${post.name}</li>`;
      });
      document.querySelector("#output").innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
}
