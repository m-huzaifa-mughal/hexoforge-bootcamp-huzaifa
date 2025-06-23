const Login = document.getElementById("form-login");
const Username = document.getElementById("username");
const Email = document.getElementById("email");
const Password = document.getElementById("pasword");

Login.addEventListener("submit", function (e) {
  e.preventDefault();
  const Username = Username.value.Trim();
  const Email = Email.value.Trim();
  const Password = Password.value.Trim();

  if (Password === "") {
    alert("Please fill in the password field");
  }
    if (Email === "") {
    alert("Please fill in the email field");
  }
    if (Username === "") {
    alert("Please fill in the username field");
  }
    
    alert("Form submitted successfully with username: {Username}");
    Login.reset();
});
  