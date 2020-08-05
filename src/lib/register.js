const register = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    alert("La contrseña debe tener al menos 6 caracteres");
    // ...
  });
}

const userRegister = () => {
  var userEmail = document.getElementById("emailRegister").value;
  var userPassword = document.getElementById("passRegister").value;
  register(userEmail, userPassword)
  console.log(userEmail);
  console.log(userPassword);
}

var btnRegister=document.getElementById("btnRegister");
btnRegister.addEventListener("click", userRegister);
