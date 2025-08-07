// let newBtn = document.createElement("button");
// newBtn.innerHTML="Click Me";
// newBtn.style.color="black";
// newBtn.style.backgroundColor = "green"

// document.querySelector("body").prepend(newBtn);

// let myBtn = document.querySelector("#btn11");
// myBtn.onclick =()=>{
//    console.log("Btn was clicked");
//    let a =20;
//    a++;
//    console.log(a);
// }



 
    // let btn1 = document.querySelector("#btn11");

   
    // btn1.addEventListener("click", (evt) => {
    //   console.log("Event 1 clicked");
    // });

    // btn1.addEventListener("click", (evt) => {
    //   console.log("Event 2 clicked");
    // });

  
    // const handl3 = () => {
    //   console.log("This is handler 3");
    // };
    // btn1.addEventListener("click", handl3);
    // //btn1.removeEventListener("click",handl3);

   
let btn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode="light";
btn.addEventListener("click",()=>{
    if(currMode==="light")
    {
        currMode="dark";
        document.querySelector("body").style.backgroundColor="black";
        body.classList.add("dark");
        body.classList.remove("light")
    }else{
        currMode="light";
        body.classList.add("light");
        body.classList.remove("dark")
         document.querySelector("body").style.backgroundColor="white";
    }
    console.log(currMode);
});
