let pass = document.getElementById("password");
let msg = document.getElementById("message");
let str = document.getElementById("strength");

pass.addEventListener('input', () =>{
    if(pass.value.length>0){
        msg.style.display ="block";
    }else{
        msg.style.display ="none";
    }
    if(pass.value.length<4){
        str.innerHTML="weak";
        pass.style.borderColor= '#a02804ff';
        msg.style.color= '#681d06ff';
    }
    else if(pass.value.length>=4 && pass.value.length<8)
    {
        str.innerHTML="medium";
         pass.style.borderColor= '#fff025ff';
        msg.style.color= '#fff025ff';
    }
    else{
        str.innerHTML="Strong";
         pass.style.borderColor= '#6aff25ff';
        msg.style.color= '#6aff25ff';
    }
})