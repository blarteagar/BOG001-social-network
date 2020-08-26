var actionCodeSettings = {
  url: "http://localhost:5000/",
};

export const createUser = async (email, password) => {
  let title;
  let message;

  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    var user = firebase.auth().currentUser;
<<<<<<< HEAD
    user.sendEmailVerification(actionCodeSettings);
    console.log(user);
    console.log("Hemos enviado un correo de verificación, por favor valida tu cuenta para continuar.");
    title="Registro Exitoso";
    message = "Te hemos enviado un correo, por favor valida tu cuenta";
    
    return {title, message};
     
    //return "Registrado Correctamente"
    
=======
    
    await user.sendEmailVerification(actionCodeSettings);
    console.log(user);
    console.log("Hemos enviado un correo de verificación, por favor valida tu cuenta para continuar.");
     
    //return "Registrado Correctamente"
       return {title: "Registro Exitoso", message:"Te hemos enviado un correo, por favor valida tu cuenta"};
>>>>>>> 7a639a093f067e1dcc89ead1de7ecdb7046575fe
  } catch (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    console.log(errorCode);
        
    if (errorCode == "auth/invalid-email") {
      title = "Por favor";
      message = "Introduce un correo válido";      
      //return message;

    } else if (errorCode == "auth/email-already-in-use") {
      title = "Error";
      message = "Este correo ya está registrado";
      //return message;

    } else if (errorCode == "auth/weak-password") {
      title = "Error";
      message = "La contraseña debe tener mínimo 6 caracteres"
      //return message;

    } else {
      errorCode;
    }    
<<<<<<< HEAD

    return {title, message};
  }


=======
  }

  console.log(message)
  return {title, message};
>>>>>>> 7a639a093f067e1dcc89ead1de7ecdb7046575fe
  
};
