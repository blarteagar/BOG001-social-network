import signInEmail from "/1fireFunctions/signInEmail.js";

loginUser = () => {

    let loginEmail = document.getElementById("emailLogin").value;
    let loginPass = document.getElementById("passLogin").value;
    loginEmail.trim()
    signInEmail(loginEmail, loginPass);
    
  }
  
  let loginBtn = document.getElementById("entrar");
  loginBtn.addEventListener("click", loginUser)
  
  
  