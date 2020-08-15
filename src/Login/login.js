import { loginGoogle, loginWithEmail } from "../FireFunctions/signInEmailGoogle.js";
import { router } from "../router.js";
import { loadModal, closeModal } from "../component/modal.js";
import { signOutUser } from "../FireFunctions/signOut.js";

export const LoginWithEmailAndPassword = async () => {
   debugger
   let loginEmail = document.getElementById("emailLogin").value;
   let loginPass = document.getElementById("passLogin").value;
   let status = await loginWithEmail(loginEmail, loginPass);
   loadModal("Login",status)
 }

 export const RedirectToRegister = () => {
   window.location.hash = "#/register"
   router("#/register")
 }

export const loginComponent = {
   render: async () => {
      const view = `
      <div class='box-login'>
       <div class="|TECHME"> <h1 class="tech"> | Tech<span class="me">Me</span> </h1> </div>
      <div class="description"> <h2 class="greenTex">¡Únete a nuestra Red Social de Developers!</h2></div>
       
      <form>
      <a href= ""  type= "button"  id="loginGoogleid"  class="btn1">ingresa con google</a>
      <img class="icono" src="img/google.png" alt="">
      <input type="email" id="emailLogin" placeholder="Ingresa tu email" required>
      <input type="password" id="passLogin" placeholder="ingresa tu contraseña" required>
      <a href= "#/register"  type= "button"  id="userRegister" class="btn2">crear tu cuenta</a>
      <input type="button" id="loginButton" value="ENTRAR"/>
      </form>
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
