
export const createUser = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
  var user = firebase.auth().currentUser;
  user.sendEmailVerification().then(function() {
  console.log(user);
  // Email sent.
  alert("Hemos enviado un correo de verificación, por favor valida tu cuenta para continuar.");
   return user;
});
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code; 
    var errorMessage = error.message;
    
    console.log(error.credential)
    console.log(errorCode);
    console.log(errorMessage);
   
    if(errorCode=="auth/invalid-email")
    {alert("Por favor introduce un correo válido");
      return errorCode;      
    } else if (errorCode=="auth/email-already-in-use"){
       alert("Este correo ya está registrado");
      return errorCode;    
    } else{
      alert("La contraseña debe tener mínimo 6 caracteres");
      return errorCode;
    }
    // ...
  });
}


