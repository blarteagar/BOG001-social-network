export const loginWithEmail = async (email, password) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    return "bienvenido"
  } catch (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    //console.log(errorMessage);

    if (errorCode == "auth/invalid-email") {

      alert("Por favor introduce un correo válido");
      return errorCode;
    } else if (errorCode == "auth/wrong-password") {
      alert("error contraseña incorrecta");
      return errorCode;

    } else if (errorCode == "auth/user-not-found") {
      alert("error correo eletronico no existe");
      return errorCode;

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
      return provaider;
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
      alert("error ya te encuentras registado con correo eletronico");
      return errorCode;
    } else if (errorCode == "auth / popup-closed-by-user") {
      alert("error no terminaste de hacer el login con google");
      return errorCode;
    }

  }
}











