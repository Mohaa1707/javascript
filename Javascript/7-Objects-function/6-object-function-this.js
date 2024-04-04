//function statement: (function statement - this pota window than pakum)
var b = 5;
function a() {
  var b = "Hello";
  console.log("Statement", this);
  console.log(b);
}
a();

//function expression: (function expression - this pota window than pakum)
var b = function () {
  console.log("EXP", this);
};

b();

var c = {
  // object kulla oru method vechi irutha - athu c ngra direct object thaan pakum.
  name: "The c object",
  log: function () {
    console.log(this);

    var self = this;
    var setName = function (newName) {
      self.name = newName;
    };
    setName("Updated c object");
  },
};

//PS:console.log(c.name);

c.log();
