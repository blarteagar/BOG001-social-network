import print from './wall/print.js'
import wall from './wall/wall.js'

//VistaCrearCuenta
const createCountView = () => {
    let content = document.getElementById("root");
    content.innerHTML = '';
    const viewText = `
    <h1>TechMe</h1>
    <h2>¡Únete a nuestra Red Social de Developers!</h2>
    <h1>Crea Tu Cuenta</h1>
    <p>Ingresa tus datos para crear tu cuenta</p>
    <form>
      <input type="button" value="Iniciar con google" id="signIn">
      <input type="text" id="nameRegister" placeholder="Nombre">
      <input type="email" id="emailRegister" placeholder="Email">
      <input type="password" id="passRegister" placeholder="Crea tu contraseña">
    </form>`;
    const divElement = document.createElement('div');
    divElement.innerHTML = viewText;
    return divElement;
};
import { userRegister } from "./Register/register.js";
import exit from "./Logout/logout.js"

exit.signOut;

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


const divElement = document.createElement('div');
divElement.innerHTML = viewText;
return divElement;


let btnPrueba = document.getElementById("btnPrueba");
let btnWall = document.getElementById("btnWall");


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

        case "": {

            return content.appendChild(loginView());
            break

        }
        default:
            return console.log('404 Not Found');;
            break
    }
};

let btnPrueba = document.getElementById("btnPrueba");
btnPrueba.addEventListener("click", () => { router("#/createCount") });



