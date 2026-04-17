let data = JSON.parse(localStorage.getItem("exp")) || [];

function add() {
  let name = document.getElementById("name").value;
  let amount = Number(document.getElementById("amount").value);

  data.push({name, amount});
  localStorage.setItem("exp", JSON.stringify(data));

  load();
}

function load() {
  let total = 0;
  let list = document.getElementById("list");
  list.innerHTML = "";

  data.forEach(e => {
    total += e.amount;
    let li = document.createElement("li");
    li.innerText = e.name + " ₹" + e.amount;
    list.appendChild(li);
  });

  document.getElementById("total").innerText = "Total ₹" + total;

  makeChart(total);
}

function makeChart(total) {
  let ctx = document.getElementById("chart");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Expenses"],
      datasets: [{
        data: [total]
      }]
    }
  });
}

function saveProfile() {
  let income = document.getElementById("income").value;
  localStorage.setItem("income", income);
  alert("Saved");
}

function showSaving() {
  let income = Number(localStorage.getItem("income"));
  let total = data.reduce((s, e) => s + e.amount, 0);

  let save = income - total;

  document.getElementById("saveText").innerText =
    "Savings: ₹" + save;
}

function show(id) {
  document.querySelectorAll(".card").forEach(c => c.classList.add("hide"));
  document.getElementById(id).classList.remove("hide");

  if (id === "saving") showSaving();
}

function logout() {
  localStorage.removeItem("login");
  window.location = "signin.html";
}

window.onload = load;