function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Simple client-side authentication for demonstration
  if (username === "student" && password === "password") {
    document.getElementById("login").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
    document.getElementById("user").innerText = username;
  } else {
    alert("Invalid credentials");
  }
}

function logout() {
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("login").style.display = "block";
}
