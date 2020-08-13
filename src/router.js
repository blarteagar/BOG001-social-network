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

//Vista Login
const loginView = () => {
    let content = document.getElementById("root")
    content.innerHTML = '';
    const viewText = `<h1>Logearse</h1>
  <h2>Ingresa tus credenciales</h2>
  <form id="form">
  <input type="email" id="emailLogin" placeholder="Ingresa tu email" required>
  <input type="password" id="passLogin" placeholder="ingresa tu contraseña" required>
  <input type="button" value="Ingresar" id="entrar">
  </form>`;


    const divElement = document.createElement('div');
    divElement.innerHTML = viewText;
    return divElement;
};

let btnPrueba = document.getElementById("btnPrueba");
let btnWall = document.getElementById("btnWall");

export const router = (route) => {

    //let route = window.location.hash; //este valor localiza un elemento hash en la ventana
    let content = document.getElementById("root");
    console.log(route);
    switch (route) {
        case "#/createCount": {

            return content.appendChild(createCountView());
            break;
        }
        case "#/login": {
            window.location.hash = "#/login"
            return content.appendChild(loginView());
            break;
        }
        case "#/wall": {
            window.location.hash = "#/wall";
            content.innerHTML="";
            content.appendChild(print(wall));            
            break;
        }
        default:
            return console.log('404 Not Found');
    }
};


btnPrueba.addEventListener("click", () => {
    window.location.hash = "#/createCount"
    router("#/createCount")
});

btnWall.addEventListener("click", () => {
    window.location.hash = "#/wall"
    router("#/wall")
})

//console.log(window.location.hash);
//router(window.location.hash)
//window.addEventListener("hashchange", router);


