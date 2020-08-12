export const signInGoogle = async () => {
  
    if (firebase.auth().currentUser == null) {
      
      var provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('https://www.googleapis.com/auth/plus.login');
      
      firebase.auth().signInWithPopup(provider).then(function (result) {
        
        var token = result.credential.accessToken;
        var user = result.user;
        console.log(user);
        alert("bienvenido estas logueado con google");
        
      }).catch(function (error) {
  
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        
        if (errorCode=== "auth/account-exists-with-different-credential") {
          alert("es el mismo usuario");
        }
      });
    } else {
      //des logear  
      //firebase.auth(). signOut();
    }
  
  }
  
  
 
  