const URL = "https://dog.ceo/api/breeds/image/random";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");


const getFacts = async () =>{
 console.log("getting data...");
 let response = await fetch(URL);
console.log(response); //data in JSON format
//now will come in usable format
let data = await response.json(); //this is my second propose 
factPara.innerText = data.message;
}

btn.addEventListener("click",getFacts);