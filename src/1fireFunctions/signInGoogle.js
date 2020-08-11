export default signInGoogle = async () => {
  
    if (firebase.auth().currentUser == null) {
      var provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('https://www.googleapis.com/auth/plus.login');
      firebase.auth().signInWithPopup(provider).then(function (result) {
        //This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        //The signed-in user info.
        var user = result.user;
        console.log(user);
        alert("bienvenido estas logueado con google");
        // ...
      }).catch(function (error) {
  
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        // ...
        if (errorCode=== "auth/account-exists-with-different-credential") {
          alert("es el mismo usuario");
        }
      });
    } else {
      //des logear  
      //firebase.auth(). signOut();
    }
  
  }
  
  
 
  