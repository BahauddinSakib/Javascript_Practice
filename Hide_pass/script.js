let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.onclick = function () {
  if (password.type === "password") {
    password.type = "text";
    eyeicon.src = "eye_open.png";
  } else {
    password.type = "password";
    eyeicon.src = "eye_close.png";
  }
}
