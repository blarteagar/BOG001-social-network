import  funciones  from './lib/firebaseConfig.js';

var email = document.getElementById("emailRegister").value;
var password = document.getElementById("passRegister").value;
var btnRegister=document.getElementById("btnRegister");
   
const register = (event) => {
email = event.target.email.value;
 password = event.target.password.value;
  
firebase.auth().createUserWithEmailAndPassword(email, password).then(result =>{
 
alert("verifica tu correo para terminar el registro");

}).catch(error =>{
// Handle Errors here.
var errorCode = error.code;
var errorMessage = error.message;
console.log(errorCode);
console.log(errorMessage);
alert("La contrseña debe tener al menos 6 caracteres");

})
         
      
}


 
btnRegister.addEventListener("submit", register);
