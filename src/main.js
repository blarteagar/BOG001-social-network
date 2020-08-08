// Este es el punto de entrada de tu aplicacion

//import { myFunction } from './lib/index.js';

//myFunction();

//Función que escucha las etiquetas numeral (#)
window.addEventListener('hashchange', ()=>{
    router(window.location.hash)
 });

////Enrouting-Asignar la ruta a una variable llamada route (o escribir un nuevo módulo)
let route = window.location.hash; //este valor localiza un elemento hash en la ventana


//Enrouting-Función enrutadora (podría ir en un módulo aparte)
const router = (route) => {
    switch (route) {
        case "#/Register": {
            return content.appendChild(viewRegister());//Por el momento, retornamos "vistas"
        }
        case "#/Login": {
            //Llamar a la función LogIn para que el usuario se loguee;
            return content.appendChild(viewWall());//Por el momento, retornamos "vistas"
        }
        default:
            return console.log('404 Not Found');
    }
};

router;//Llamamos a la función router

//Inicio de generación de vistas
let content = document.getElementById("root")//Llamando a la sección HTML donde mostraremos contenido

//Generando la vista signIn (módulo aparte con export default ()=>{} const viewSignIn =>{})
const viewRegister = vRegister => {
    content.innerHTML = '';//Inicialmente el content va a estar vacío
    const viewText = `<h1>Crea Tu Cuenta</h1>
    <p>Ingresa tus datos para crear tu cuenta</p>`;//Plantilla de HTML inserta en JavaScript
    const divElement = document.createElement('div'); //Elemento HTML creado con JavaScript
    divElement.innerHTML = viewText; //Inserción de viewText (un string) en el elemento con innerHTML
    return divElement;
};

//Generando la vista Wall (módulo aparte con export default ()=>{} const Wall =>{})
const viewWall = vWall => {
    content.innerHTML = '';//Inicialmente el content va a estar vacío
    const viewText = `<h1>Wall</h1>
    <p>Bienvenido a tu muro de publicaciones</p>`;//Plantilla de HTML inserta en JavaScript
    const divElement = document.createElement('div'); //Elemento HTML creado con JavaScript
    divElement.innerHTML = viewText; //Inserción de viewText (un string) en el elemento con innerHTML
    return divElement;
};
