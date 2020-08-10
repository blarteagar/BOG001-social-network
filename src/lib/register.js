const register = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password).then((userRes) => {
    debugger
var user = firebase.auth().currentUser;
user.sendEmailVerification().then(function() {
  debugger
});
  }).catch(function(error) {
    // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorCode);
  console.log(errorMessage);
   alert("La contrseña debe tener al menos 6 caracteres");

  });
}

const userRegister = () => {
  let userEmail = document.getElementById("emailRegister").value;
  let userPassword = document.getElementById("passRegister").value;
  register(userEmail, userPassword)
  console.log(userEmail);
  console.log(userPassword);
  
}

