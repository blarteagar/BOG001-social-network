const register = () => {
  var email = document.getElementById("emailRegister").value;
  var password = document.getElementById("passRegister").value;
  console.log(email);
  console.log(password);

  firebase.auth().createUserWithEmailAndPassword(email, password).then(res => {
    alert("Usuario registrado correctamente");
  }).catch(function (error) {
    alert("La contraseña debe tener al menos 6 caracteres");
  });
}

var BtnRegister = document.getElementById("btnRegister");
BtnRegister.addEventListener("click", register);
