import {createUser} from "/FireFunctions/createUser.js";
import {signOutUser} from "/FireFunctions/signOut.js";

const userRegister = () => {
  let userEmail = document.getElementById("emailRegister").value;
  let userPassword = document.getElementById("passRegister").value;
  createUser(userEmail, userPassword);
}

export const registerView = { 

  render: ()=> {
      let root = document.getElementById("root");
      root.innerHTML = '';
      const view =
      `<div class="view">
      <p class="tech"> | Tech<span class="me">Me</span> </p>
          
          <p class="blueText">¡Bienvenid@!</p>
          <p class="blueText">Completa el formulario con tu información para crear tu cuenta:</p>
          <form>
              <input type="text" id="nameRegister" placeholder="  Nombre">
              <input type="text" id="nickNameRegister" placeholder="  Nick Name">
              <input type="email" id="emailRegister" placeholder="  Correo Electrónico">
              <input type="password" id="passRegister" placeholder="  Crea tu contraseña">
              <p class="whiteText"> Al registrarte aceptas nuestros términos y condiciones</p>
              <button id="btnRegister">REGISTRARME</button>
              <button id="btnSalir">SALIR_PRUEBA</button>
          </form>
          
          </div>
          `
      return view;
      },

  afterRender: async ()=> {
      let btnRegister = document.getElementById("btnRegister");
      btnRegister.addEventListener("click", userRegister);

      let btnSalir = document.getElementById("btnSalir");
      btnSalir.addEventListener("click", signOutUser);
    }  
}