// Función pura de register (Códigos tomados de la documentación de Firebase)
const register = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(function() {
    alert("Por favor revisa tu correo para validar el registro");
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    alert("La contraseña debe tener al menos 6 caracteres");
    // ...
  });
}

// Función que implementa el register e interactúa con el DOM:
const userRegister = () => {
  var userEmail = document.getElementById("emailRegister").value;
  var userPassword = document.getElementById("passRegister").value;
  register(userEmail, userPassword);
  console.log(userEmail);
  console.log(userPassword);
}

// Escuchar el evento:
var btnRegister=document.getElementById("btnRegister");
btnRegister.addEventListener("click", userRegister);
