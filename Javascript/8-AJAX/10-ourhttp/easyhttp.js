class EasyHttp {
  //Make an HTTP request

  //   get(url) {
  //     return new Promise((resolve, reject) => {
  //       fetch(url)
  //         .then((res) => res.json())
  //         .then((data) => resolve(data))
  //         .catch((err) => reject("Error:Something went wrong"));
  //     });
  //   }
  // }

  //Create a post

  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  //Delete
  delete(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => resolve("Resource Deleted"))
        .catch((err) => reject(err));
    });
  }
}
