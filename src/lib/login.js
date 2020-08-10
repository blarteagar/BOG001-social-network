const login = (email, password) => {
firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
  
   alert("bienvenido");
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("no estas registrado");
    // ...
  });
}

const LoginUser = () => {

  let loginEmail = document.getElementById("emailLogin").value;
  let loginPass = document.getElementById("passLogin").value;
  loginEmail.trim()
  login(loginEmail, loginPass);
  console.log(loginEmail);
  console.log(loginPass);
}

let loginBtn = document.getElementById("entrar");
loginBtn.addEventListener("click", LoginUser)


const longinGoogle = async () => {
  debugger
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


const user = document.getElementById("singIn");
user.addEventListener("click", longinGoogle);
