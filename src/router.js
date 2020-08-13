import { auth } from "../FireFunctions/firebaseConfig.js";
import login from "./Login/login.js";


 let btnPrueba=document.getElementById("btnPrueba");

const createCountView = () => {
return  '<h1>Registro</h1>'
}


export const router =  async (route) => {
    
    //let route = window.location.hash; //este valor localiza un elemento hash en la ventana
    const content = document.getElementById("root");
    debugger
    switch (route) {
        case "#/createCount": 
                document.getElementById("root").innerHTML = createCountView();
            break;
          case "#/login":
                document.getElementById("root").innerHTML =  login();
                break;
           default:
                //content.innerHTML(view);
                debugger
                    document.getElementById("root").innerHTML =  login();
                    // window.location.href =  "http://localhost:5000/#/Login"
                break;
        }
    }
    

btnPrueba.addEventListener("click", ()=>{
    window.location.hash="#/createCount"
    router("#/createCount")});

router(window.location.hash);


//window.addEventListener("hashchange", router);

