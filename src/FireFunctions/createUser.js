
export const createUser = async (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
  var user = firebase.auth().currentUser;
  user.sendEmailVerification().then(function() {
  console.log(user);
  // Email sent.
  return "Hemos enviado un correo de verificación, por favor valida tu cuenta para continuar.";
});
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code; 
    var errorMessage = error.message;
    
    // console.log(error.credential)
    // console.log(errorCode);
    // console.log(errorMessage);
   
    if(errorCode=="auth/invalid-email"){ 
      return "Por favor introduce un correo válido";      
    } else if (errorCode=="auth/email-already-in-use"){
        return "Este correo ya está registrado" ;    
    } else{
        return "La contraseña debe tener mínimo 6 caracteres";
    }
    // ...
  });
}


