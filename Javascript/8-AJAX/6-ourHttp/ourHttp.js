function OurHttp() {
  this.http = new XMLHttpRequest();
}

// const test = new OurHttp();
// console.log(test);

//Make a HTTP GET REQUEST

//Method prototype la than podanum.

OurHttp.prototype.get = function (url, callback) {
  this.http.open("GET", url, true);

  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(self.http.responseText);
    } else {
      callback(self.http.status);
    }
  };
  this.http.send();
};

// const test = new OurHttp();
// test.get();
