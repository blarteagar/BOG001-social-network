import {registerView} from "./register/register.js";
import {loginComponent} from "./login/login.js";
import wall from './wall/wall.js';

export const router = async (route) => {
    let view;
    const content = document.getElementById("root");
    switch (route) {
        case "#/register":
            window.location.hash="#/register";
            view = await registerView.render();
            content.innerHTML= view;
            registerView.afterRender();
            break;
        
        case "#/login":
            //window.location.hash="#/login";
            view =  await loginComponent.render();
            content.innerHTML =  view;
            loginComponent.afterRender();
            break;
        
        case "#/wall":
            console.log(wall);
            console.log(typeof(wall));
            window.location.hash = "#/wall"
            content.appendChild(wall());
            break;
        default:
            view = await loginComponent.render();
            content.innerHTML =  view;
            loginComponent.afterRender();
            break;
    }
     history.pushState({view}, "", route);
}
    
router(window.location.hash);

// let btnWall = document.getElementById("btnWall");
// btnWall.addEventListener("click", () => { router("#/wall") });





