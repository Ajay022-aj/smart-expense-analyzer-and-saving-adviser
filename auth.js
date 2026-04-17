function signup() {
  localStorage.setItem("user", document.getElementById("newUser").value);
  localStorage.setItem("pass", document.getElementById("newPass").value);
  alert("Signup done");
  window.location = "index.html";
}

function login() {
  let u = document.getElementById("username").value;
  let p = document.getElementById("password").value;

  if (u === localStorage.getItem("user") &&
      p === localStorage.getItem("pass")) {
    localStorage.setItem("login", "true");
    window.location = "dashboard.html";
  } else {
    alert("Wrong login");
  }
}