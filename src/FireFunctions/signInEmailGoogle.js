export const loginWithEmail = async (email, password) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    return "Ingresaste con correo eletronico";
  } catch (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    //console.log(errorMessage);

    if (errorCode == "auth/invalid-email") {
      return "Por favor introduce un correo válido";
    } else if (errorCode == "auth/wrong-password") {
      return "Error contraseña incorrecta";

    } else if (errorCode == "auth/user-not-found") {

      return "Error correo eletronico no existe";

    }
  }
}

export const loginGoogle = async () => {
  try {
    if (firebase.auth().currentUser == null) {
      var provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('https://www.googleapis.com/auth/userinfo.email');
      await firebase.auth().signInWithPopup(provider)
      //This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      var user = result.user;
      // console.log(user);
      //console.log(token);
      return "Ingresaste con google";
    }
  } catch (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    // console.log(errorMessage);
    // console.log(email);
    // console.log(credential);
    // ...
    if (errorCode === "auth/account-exists-with-different-credential") {
      return "Error ya te encuentras registado con correo eletronico";
    } else if (errorCode == "auth / popup-closed-by-user") {

      return "Error no terminaste de hacer el login con google";
    }

  }
}











