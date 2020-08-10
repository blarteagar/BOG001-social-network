//import {  profileEmailValidator, profilePasswordValidator } from './validations';

const login = (email, password) => {
firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
  debugger
   alert("bienvenido");
  }).catch(function (error) {
    debugger
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    alert("no estas registrado"); 
    // ...
  });
}

const profileEmailValidator = {
    pattern: /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/g,
    patternError: { title: 'Dirección correo electrónico invalida!', subTitle: 'Perdón, El correo electrónico  ingresado es invalido.' }
  };
const profilePasswordValidator = {
    minLength: 6,
    lengthError: { title: 'Contraseña muy corta!', subTitle: 'Perdón, La contraseña debe contener mas de 4 caracteres.' }
  };

const LoginUser = () => {

  let loginEmail = document.getElementById("emailLogin").value;
  let loginPass = document.getElementById("passLogin").value;
  loginEmail.trim()
  debugger
  var validEmail = new RegExp(profileEmailValidator.pattern)
  if(validEmail.test(loginEmail) && loginPass.length >= profilePasswordValidator.minLength){
      login(loginEmail, loginPass);
  }
  else{
   //error
   alert("el email ingresado o la contraseña no son válidos")
  }
}

let loginBtn = document.getElementById("entrar");
loginBtn.addEventListener("click", LoginUser)

  
//Login con Google
const longinGoogle = () => {    
if (firebase.auth().currentUser){
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    firebase.auth().signInWithPopup(provider).then(function(result) {
   //This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
   //The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  
  var errorCode = error.code;
  var errorMessage = error.message;
  var email = error.email;
  var credential = error.credential;
  // ...
  if(errorCode==="auth/account-exists-with-different-credential"){
 alert("es el mismo usuario");
}
});
}else{
    firebase.auth(). signOut();
}

}
 const user = document.getElementById("login");
 user.addEventListener("click", longinGoogle);