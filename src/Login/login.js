import { loginGoogle, loginWithEmail } from "../FireFunctions/signInEmailGoogle.js";
import { router } from "../router.js";
import { loadModal, closeModal } from "../component/modal.js";
import { signOutUser } from "../FireFunctions/signOut.js";

export const LoginWithEmailAndPassword = async () => {
   debugger
   let loginEmail = document.getElementById("emailLogin").value;
   let loginPass = document.getElementById("passLogin").value;
   let statusLogin = await loginWithEmail(loginEmail, loginPass);
   loadModal(statusLogin.title, statusLogin.message);
 }

 export const RedirectToRegister = () => {
   window.location.hash = "#/register"
   router("#/register")
 }

export const loginComponent = {
   render: async () => {
      const view = `
      <div class='box-login'>
       <div class="TechMeLogin"> <h1 class="techLogin"> | Tech<span class="me">Me</span> </h1> </div>
      <div class="WelcomeLogin"> <h2 class="greenTex">¡Únete a nuestra Red Social de Developers!</h2></div>
       
      <a href= ""  type= "button"  id="loginGoogleid"  class="btn1">ingresa con google</a>
      <img class="icono" src="img/google.png" alt="google">
      <div class="FormLogin">
      <div class="box-form">
      <form>
      <input class="InputLogin" type="email" id="emailLogin" placeholder="Ingresa tu email" required>
      <input class="InputLogin" type="password" id="passLogin" placeholder="Ingresa tu contraseña" required>
      </form>
      <div class = "actionsLogin">
      <a href= "#/register" class="btn2"  type= "button"  id="userRegister">crear tu cuenta</a>
      <input type="button" class="loginButton" id="loginButton" value="ENTRAR"/>
      </div>
      </div>
      </div>
      
      <img class="Img" src="img/people.jpg" alt="people">
      </div> 
      `  
      return view;
   },
   afterRender: () => {
      let loginGoogleItem = document.getElementById("loginGoogleid");
      loginGoogleItem.addEventListener('click',loginGoogle);
      let loginEmail = document.getElementById("loginButton")
      loginEmail.addEventListener('click',LoginWithEmailAndPassword)
      let userRegister = document.getElementById("userRegister")
      userRegister.addEventListener('click',RedirectToRegister)
   }
}
