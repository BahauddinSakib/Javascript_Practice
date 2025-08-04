const passBox = document.querySelector("#password");
const length =12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const num = "0123456789";
const symbol = "@#$%&*=+-*/^_?(){}[]";

const allChars = upperCase+lowerCase+num+symbol;
//random generate
function createPass(){
    let password = "";
    password += upperCase[Math.floor(Math.random()* upperCase.length)];
     password += lowerCase[Math.floor(Math.random()* lowerCase.length)];
      password += num[Math.floor(Math.random()* num.length)];
       password += symbol[Math.floor(Math.random()* symbol.length)];

       while(length> password.length)
       {
         password += allChars[Math.floor(Math.random()* allChars.length)];
       }
       passBox.value = password;
}

//copy pass
function copyPassword() {
    const password = passBox.value;

    if (password === "") {
        alert("Nothing to copy!");
        return;
    }

    navigator.clipboard.writeText(password)
        .then(() => {
            alert("Password copied to clipboard!");
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
        });
}
