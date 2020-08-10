// Este es el punto de entrada de tu aplicación

//import { myFunction } from './lib/index.js';

import { viewWall } from "/wall.js";
import { viewRegister } from "/homeView.js";



//Función que escucha las etiquetas numeral (#)
window.addEventListener('hashchange', ()=>{
    router(window.location.hash)
 });

////Enrouting-Asignar la ruta a una variable llamada route (o escribir un nuevo módulo)
let route = window.location.hash; //este valor localiza un elemento hash en la ventana
let content = document.getElementById("root")//Llamando a la sección HTML donde mostraremos contenido

//Enrouting-Función enrutadora (podría ir en un módulo aparte)
const router = (route) => {
    switch (route) {
        case "#/": {
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

router(route);//Llamamos a la función router
