const http = new EasyHttp();

const url = "https://jsonplaceholder.typicode.com/users";
const singleUrl = "https://jsonplaceholder.typicode.com/users/7";
const deleteUrl = "https://jsonplaceholder.typicode.com/users/1";

http
  .get(url)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

const data = {
  name: "Mohanraj",
  userName: "Mohaa",
  email: "mithranrajmohan17@gmail.com",
};

http
  .post(url, data)
  .then((data) => console.log(data))
  .then((err) => console.log(err));

http
  .put(singleUrl, data)
  .then((data) => console.log(data))
  .then((err) => console.log(err));

http
  .delete(deleteUrl, data)
  .then((data) => console.log(data))
  .then((err) => console.log(err));
