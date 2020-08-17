export const createUser = async (email, password) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);  
    await user.sendEmailVerification()
     
    return {title:"Confirma", message:"Hemos enviado un correo de verificación, por favor valida tu cuenta para continuar"};
  } catch (error) {
     // Handle Errors here.
     var errorCode = error.code; 
     var errorMessage = error.message;
     let title;
     let message;
     
     // console.log(error.credential)
     // console.log(errorCode);
     // console.log(errorMessage);
    
     if(errorCode=="auth/invalid-email"){ 
       title = "Por favor";
       message = "introduce un correo válido";
             
     } else if (errorCode=="auth/email-already-in-use"){
       title = "Errorr";
       message = "Este correo ya está registrado"
         
     } else{
       title = "Error";
       message = "La contraseña debe tener mínimo 6 caracteres"
         
     }
     return {title, message};
  }
}


