const github = new Github();
const ui = new UI();

const user = document.getElementById("submit-button");
user.addEventListener("click", (e) => {
  // console.log(e);
  e.preventDefault();

  let userText = document.querySelector("#searchUser").value;
  //console.log(userText);

  if (userText !== "") {
    github
      .getUser(userText)
      .then((data) => {
        ui.showProfile(data);
        ui.clearProfile();
        document.querySelector("#searchUser").value = "";
      })
      .catch((err) => console.log(err));
  }
});
