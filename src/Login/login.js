import { loginGoogle, loginWithEmail } from "../FireFunctions/signInEmailGoogle.js";
import { router } from "../router.js";

const loginComponent = () => {
 let view =  `
 <div class='box-login'>
 <h1>TechMe</h1>
 <h2>¡Únete a nuestra Red Social de Developers!</h2>
 <p>Ingresa tus datos para crear tu cuenta</p>
 <form>
 <input type="email" id="emailLogin" placeholder="Ingresa tu email" required>
 <input type="password" id="passLogin" placeholder="ingresa tu contraseña" required>
 <input type="button" value="Ingresar" id="loginButton">
 <input type="button" value="Ingresar con google" id="loginGoogle">
 <div id="userRegister">Crea Tu Cuenta</div>
 </form>
 </div>
 `;

 const LoginWithEmailAndPassword = () => {
    let loginEmail = document.getElementById("emailLogin").value;
    let loginPass = document.getElementById("passLogin").value;
    loginWithEmail(loginEmail, loginPass);
   }

 document.addEventListener('click', (e)  => {
     if(e.target){
      switch (e.target.id) {
           case "loginGoogle":
            loginGoogle()
            //window.location.hash="#/createCount"
              break;
           case "loginButton":
            LoginWithEmailAndPassword();
            break;
            case "userRegister":
               window.location.hash="#/createCount"
               router("#/createCount")
            break;
           default:
              break;
        }
     }
 })
 return view;
} 


export default loginComponent;