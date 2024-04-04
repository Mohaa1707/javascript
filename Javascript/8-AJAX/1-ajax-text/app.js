document.getElementById("btn").addEventListener("click", loadData);

function loadData() {
  //create an XHR Object

  const xhr = new XMLHttpRequest();
  //open
  xhr.open("GET", "data.txt", true);

  xhr.onload = function () {
    if (this.status === 200) {
      document.getElementById(
        "output"
      ).innerHTML = `<h1>${this.responseText}</h1>`;
    }
    if (this.status === 400) {
      document.getElementById("output").innerHTML = `<h1> Not Found</h1>`;
    }
    console.log(this);
  };
  xhr.send();
}
