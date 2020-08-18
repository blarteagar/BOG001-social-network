import {registerView} from "./register/register.js";
import login from "./login/login.js";
import wall from './wall/wall.js';


export const router = async (route) => {
    
    const content = document.getElementById("root");
    
    switch (route) {
        case "#/register": {
            window.location.hash="#/register";
            content.innerHTML= await registerView.render();
            registerView.afterRender();
            break;
        } 
        case "#/login":{
            window.location.hash="#/login";
            content.innerHTML =  login();
            break;
        }
        case "#/wall": {
            //window.location.hash = "#/wall";
            //content.innerHTML = wallView.render();
            //await wallView.afterRenderWall();
            console.log("WALL");
            break;
        }
        default:
            content.innerHTML =  login();
            break;
    }
}
    
router(window.location.hash);

// let btnWall = document.getElementById("btnWall");
// btnWall.addEventListener("click", () => { router("#/wall") });





