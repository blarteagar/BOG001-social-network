import wall from './wall/wall.js'

import { userRegister } from "./register/register.js";

const createCountView = {

    render: () => {
        let root = document.getElementById("root");
        root.innerHTML = '';
        const registerView =
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
        return registerView;
    },

    afterRender: async () => {
        let btnRegister = document.getElementById("btnRegister");
        btnRegister.addEventListener("click", userRegister);

        let btnSalir = document.getElementById("btnSalir");
        btnSalir.addEventListener("click", exit.signOut);


    }

}

//Vista Login
const loginView = () => {
    let content = document.getElementById("root")
    content.innerHTML = '';
    const viewText = `<h1>Logearse</h1>
  <h2>Ingresa tus credenciales</h2>`;
    const divElement = document.createElement('div');
    divElement.innerHTML = viewText;
    return divElement;
};

export const router = async (route) => {

    //let route = window.location.hash; //este valor localiza un elemento hash en la ventana
    let content = document.getElementById("root");
    console.log(route);
    switch (route) {
        case "#/createCount": {
            window.location.hash = "#/createCount";
            content.innerHTML = createCountView.render();
            console.log(content.innerHTML);
            await createCountView.afterRender();
            break
        }
        case "#/login": {
            window.location.hash = "#/login"
            return content.appendChild(loginView());
            break
        }
        case "#/wall": {
            console.log(wall);
            console.log(typeof(wall));
            window.location.hash = "#/wall"
            return content.appendChild(wall());
            break
        }
        default:
            return console.log('404 Not Found');
            break
    }
};

let btnPrueba = document.getElementById("btnPrueba");
btnPrueba.addEventListener("click", () => { router("#/createCount") });

let btnWall = document.getElementById("btnWall");
btnWall.addEventListener("click", () => { router("#/wall") });


