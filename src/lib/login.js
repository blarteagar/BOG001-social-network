import {  profileEmailValidator, profilePasswordValidator } from './validations.js';

const login = (email, password) => {
firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
  
   alert("bienvenido");
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("no estas registrado");
    // ...
  });
}

const LoginUser = () => {

  let loginEmail = document.getElementById("emailLogin").value;
  let loginPass = document.getElementById("passLogin").value;
  loginEmail.trim()
  
  let validEmail = new RegExp(profileEmailValidator.pattern)
  if (validEmail.test(loginEmail) && loginPass.length >= profilePasswordValidator.minLength) {
    login(loginEmail, loginPass);
  }
  else{
   //error
   alert("el email ingresado o la contraseña no son válidos")
  }
}

let loginBtn = document.getElementById("entrar");
loginBtn.addEventListener("click", LoginUser)


const loginGoogle = async () => {
  
  if (firebase.auth().currentUser == null) {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    firebase.auth().signInWithPopup(provider).then(function (result) {
      //This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      //The signed-in user info.
      var user = result.user;
      console.log(user);
      alert("bienvenido estas logueado con google");
      // ...
    }).catch(function (error) {

      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      // ...
      if (errorCode=== "auth/account-exists-with-different-credential") {
        alert("es el mismo usuario");
      }
    });
  } else {
    //des logear  
    //firebase.auth(). signOut();
  }

}


const user = document.getElementById("signIn");
user.addEventListener("click", loginGoogle);
