// Este es el punto de entrada de tu aplicacion

//import { myFunction } from './lib/index.js';

//myFunction()
 
     
const register = () => {

    let Name = document.getElementById("nombre");
    let User = document.getElementById("nickName");
    let email = document.getElementById("emailRegister").value;
    let password = document.getElementById("passRegister").value;
    console.log(email);
    console.log(password);
    
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
     // Handle Errors here.
     let errorCode = error.code; 
     let errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      //...
    });
    }
    let btnRegister=document.getElementById("btnRegister");
    btnRegister.addEventListener("click", register);
     