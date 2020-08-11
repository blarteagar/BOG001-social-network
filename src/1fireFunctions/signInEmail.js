export default signInEmail = (email, password) => {
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

