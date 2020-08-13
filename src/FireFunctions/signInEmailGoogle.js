import { auth  } from "./firebaseConfig.js";

export const loginWithEmail = async (email, password) => {
  auth.signInWithEmailAndPassword(email, password).then(function() {
    
     alert("bienvenido");
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      
      if(errorCode=="auth/invalid-email"){
       
        alert("Por favor introduce un correo válido");
        return errorCode;      
      } else if (errorCode=="auth/wrong-password"){
         alert("error contraseña incorrecta");
        return errorCode;  
  
      } else if (errorCode=="auth/user-not-found"){ 
        alert("error correo eletronico no existe");
        return errorCode;
      
    }
    
      // ...
    });
  }
  
  export const loginGoogle = async () => {
    if (auth.currentUser == null) {
      var provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('https://www.googleapis.com/auth/plus.login');
      auth.signInWithPopup(provider).then(function (result) {
        //This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        //The signed-in user info.
        var user = result.user;
        console.log(user);
        console.log(token);
        alert("bienvenido estas logueado con google");
        // ...
      }).catch(function (error) {
  
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorMessage);
        console.log(email);
        console.log(credential);
        // ...
        if (errorCode=== "auth/account-exists-with-different-credential") {
          alert("error ya te encuentras registado con correo eletronico");
          return errorCode;
        } else if (errorCode=="auth / popup-closed-by-user"){
          alert("error no terminaste de hacer el login con google");
         return errorCode;        
       }
      //des logear  
    }); //firebase.auth(). signOut();
    }
    
  }
  