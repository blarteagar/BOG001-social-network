import {registerView} from "./Register/register.js";
import login from "./Login/login.js";

let btnPrueba=document.getElementById("btnPrueba");
btnPrueba.addEventListener("click", ()=>{router("#/register")});

//window.addEventListener("hashchange", router);
export const router =  async (route) => {
    
    //let route = window.location.hash; //este valor localiza un elemento hash en la ventana
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
        default:
            //content.innerHTML(view);
        
                content.innerHTML =  login();
                // window.location.href =  "http://localhost:5000/#/Login"
            break;
    }
}
    
router(window.location.hash);




