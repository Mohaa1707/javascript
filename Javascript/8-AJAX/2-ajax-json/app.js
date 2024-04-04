document.getElementById("btn-1").addEventListener("click", loadData);
document.getElementById("btn-2").addEventListener("click", loadCustomers);

function loadData() {
  const xhr = new XMLHttpRequest();

  //OPEN
  xhr.open("GET", "customer.json", true);
  xhr.onload = function () {
    if (this.status === 200) {
      const customer = JSON.parse(this.responseText);
      const output = `
        <ul>
          <li>ID : ${customer.id}</li>
          <li>Name : ${customer.Name}</li>
          <li>company : ${customer.company}</li>
          <li>Phone : ${customer.phone}</li>
        </ul>
      `;

      document.getElementById("customer").innerHTML = output;
    }
    if (this.status === 400) {
      document.getElementById("customer").innerHTML = `<h1>Not Found</h1>`;
    }
  };
  xhr.send();
}

function loadCustomers() {
  const xhr = new XMLHttpRequest();

  //OPEN
  xhr.open("GET", "customers.json", true);
  xhr.onload = function () {
    if (this.status === 200) {
      const customers = JSON.parse(this.responseText);
      let output1 = "";
      customers.forEach(function (customer) {
        output1 =
          output1 +
          `
              <ul>
                <li>ID : ${customer.id}</li>
                <li>Name : ${customer.Name}</li>
                 <li>company : ${customer.company}</li>
                 <li>Phone : ${customer.phone}</li>
              </ul>
            `;
      });

      document.getElementById("customers").innerHTML = output1;
    }
    if (this.status === 400) {
      document.getElementById("customer").innerHTML = "<h1>Not Found</h1>";
    }
  };
  xhr.send();
}
