const nam = document.querySelector("#name");
const pass = document.querySelector("#password");
addEventListener("submit",(evt)=>{
    evt.preventDefault();

    if(nam.value.trim() !== "" && pass.value.trim()!==""){
          window.location.href="index2.html";
    }else{
        alert("Both Name and Password not entered!");
    }
});