import {signInEmail}  from "/FireFunctions/signInEmail.js";

export const loginUser = () => {

    let loginEmail = document.getElementById("emailLogin").value;
    let loginPass = document.getElementById("passLogin").value;
    signInEmail(loginEmail, loginPass);
    
  }
  
  // let loginBtn = document.getElementById("entrar");
  // loginBtn.addEventListener("click", loginUser)
  
  
  