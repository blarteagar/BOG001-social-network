const register = () => {
    var email = document.getElementById("emailRegister").value;
    var password = document.getElementById("passRegister").value;
    console.log(email);
    console.log(password);

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

var btnRegister=document.getElementById("btnRegister");
btnRegister.addEventListener("click", register);
