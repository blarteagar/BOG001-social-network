import {registerView} from "./register/register.js";
import {loginComponent} from "./login/login.js";
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
            //window.location.hash="#/login";
            content.innerHTML = await loginComponent.render();
            loginComponent.afterRender();
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
            content.innerHTML = await loginComponent.render();
            loginComponent.afterRender();
            break;
    }
}
    
router(window.location.hash);

// let btnWall = document.getElementById("btnWall");
// btnWall.addEventListener("click", () => { router("#/wall") });





