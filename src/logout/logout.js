import signOut from "/1fireFunctions/signOut.js";

// Función UserLogout:
let buttons = document.getElementById("buttons");

// Observador:
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        console.log(user);
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        buttons.innerHTML = `<button id="btnLogout">SALIR</button>`;
        userLogout();

    } else {

        // User is signed out.
        console.log("no existe usuario");
        buttons.innerHTML = `<button id="btnRegister">REGRISTRARSE</button>`;
        let btnRegister = document.getElementById("btnRegister");
        btnRegister.addEventListener("click", userRegister);
    }
});

function userLogout() {
    let btnLogOut = document.getElementById("btnLogout");
    btnLogOut.addEventListener("click", signOut);
}

