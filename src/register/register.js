import {createUser} from "/FireFunctions/createUser.js";
import {signOutUser} from "/FireFunctions/signOut.js";
import {router} from "../router.js";

export const userRegister = async () => {
  let userEmail = document.getElementById("emailRegister").value;
  let userPassword = document.getElementById("passRegister").value;
  createUser(userEmail, userPassword);
  router("#/wall");
}

export const registerView = { 

  render: ()=> {
      let root = document.getElementById("root");
      root.innerHTML = '';
      const view =
     `<div class="box-register">
      <div class="techMeRegister"><h1 class="tech"> |Tech<span class="me">Me</span></h1></div> 
          <div class="welcomeTextRegister">
          <p class="blueText">¡Bienvenid@!</p>
          <p class="blueText">Completa el formulario con tu información para crear tu cuenta:</p>
          </div>
          <form class="formRegister">
              <input class="inputRegister" type="text" id="nameRegister" placeholder="  Nombre">
              <input class="inputRegister" type="text" id="nickNameRegister" placeholder="  Nick Name">
              <input class="inputRegister" type="email" id="emailRegister" placeholder="  Correo Electrónico">
              <input class="inputRegister" type="password" id="passRegister" placeholder="  Crea tu contraseña">
              <p class="termsText"> Al registrarte aceptas nuestros términos y condiciones</p>
              <button id="btnRegister">REGISTRARME</button>
            </form>
            
     </div>`
      
      return view;
      },

  afterRender: async ()=> {
      let btnRegister = document.getElementById("btnRegister");
      btnRegister.addEventListener("click", userRegister);

      
    }  
}