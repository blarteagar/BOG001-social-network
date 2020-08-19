var actionCodeSettings = {
  url: "http://localhost:5000/",
};

export const createUser = async (email, password) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    var user = firebase.auth().currentUser;
    
    await user.sendEmailVerification(actionCodeSettings);
    console.log(user);

    console.log("Hemos enviado un correo de verificación, por favor valida tu cuenta para continuar.");

    return "Registrado Correctamente";
  } catch (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    console.log(errorCode);
    
    if (errorCode == "auth/invalid-email") {
      return errorCode;

    } else if (errorCode == "auth/email-already-in-use") {
      return errorCode;

    } else if (errorCode == "auth/weak-password") {
      return errorCode;

    } else {
      return errorCode;
    }

    
  }
};
