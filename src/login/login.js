import { loginGoogle, loginWithEmail } from "../FireFunctions/signInEmailGoogle.js";
import { router } from "../router.js";

const loginComponent = () => {
 let view =  `
 <div class='box-login'>
 <h1 class="tech"> | Tech<span class="me">Me</span> </h1>
 <h2 class="greenTex">¡Únete a nuestra Red Social de Developers!</h2>
  
 <form>
 <a href= "#/register"  type= "button"  id="loginGoogle"  class="btn1">ingresa con google</a>
 <img class="icono" src="img/google.png" alt="">
 <input type="email" id="emailLogin" placeholder="Ingresa tu email" required>
 <input type="password" id="passLogin" placeholder="ingresa tu contraseña" required>
 <a href= "#/register"  type= "button"  id="userRegister" class="btn2">crear tu cuenta</a>
 <button id="loginButton">ENTRAR</button>
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
           case "loginButton":{

           
            LoginWithEmailAndPassword();
            break;
           }
            case "userRegister":{ 
               window.location.hash="#/register"
               router("#/register")
            break;
            }
            case "entrar":{ 
                window.location.hash="#/register"
               router("#/register")
               break;
            }
           default:
              
        }
     }
 })
 return view;
} 


export default loginComponent;
