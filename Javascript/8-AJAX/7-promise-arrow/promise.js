//Array of objects:

const posts = [
  { title: "Post One", body: "This is a Post One" },
  { title: "Post Two", body: "This is a Post Two" },
  { title: "Post Three", body: "This is a Post Three" },
];

function createPost(post) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      posts.push(post);

      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error:Something went wrong");
      }
    }, 2000);
  });
}

//console.log(createPost());

function getPost() {
  setTimeout(function () {
    let output = "";

    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: "Post Four", body: "This is a post Four" })
  .then(getPost)
  .catch(function (err) {
    console.log(err);
  });
