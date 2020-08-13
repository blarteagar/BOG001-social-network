import wall from './wall/wall.js'
import {registerView} from "./register/register.js";
import login from "./Login/login.js";

let btnPrueba = document.getElementById("btnPrueba");
btnPrueba.addEventListener("click", () => { router("#/register") });

let btnWall = document.getElementById("btnWall");
btnWall.addEventListener("click", () => { router("#/wall") });

export const router =  async (route) => {
    
    const content = document.getElementById("root");
    
    switch (route) {
        case "#/register": {
            window.location.hash="#/register";
            content.innerHTML= registerView.render();
            await registerView.afterRender();
            break;
        } 
        case "#/login":{
            content.innerHTML =  login();
            break;
        }
        case "#/wall": {
            console.log(wall);
            console.log(typeof(wall));
            window.location.hash = "#/wall"
            return content.appendChild(wall());
            break;
        }
        default:
                     content.innerHTML =  login();
    }
}
