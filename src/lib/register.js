
 
let email = document.getElementById("emailRegister").value;
let password = document.getElementById("passRegister").value;
let btnRegister=document.getElementById("btnRegister");
btnRegister.addEventListener("click", register); 


const register = (email, password) => {

firebase.auth().createUserWithEmailAndPassword(email, password).then(result =>{
alert("verifica tu correo para terminar el registro");
 
}).catch(error =>{
// Handle Errors here.
let errorCode = error.code;
let errorMessage = error.message;
console.log(errorCode);
console.log(errorMessage);
alert("La contrseña debe tener al menos 6 caracteres");


})
}

