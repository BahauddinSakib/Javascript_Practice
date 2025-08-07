"use strict";

var nam = document.querySelector("#name");
var pass = document.querySelector("#password");
addEventListener("submit", function (evt) {
  evt.preventDefault();

  if (nam.value.trim() !== "" && pass.value.trim() !== "") {
    window.location.href = "index2.html";
  } else {
    alert("Both Name and Password not entered!");
  }
});