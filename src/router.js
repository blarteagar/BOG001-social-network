import {registerView} from "./Register/register.js";


const loginView = () => {
  let content = document.getElementById("root")
  content.innerHTML = '';
  const viewText = `<h1>Logearse</h1>
  <h2>Ingresa tus credenciales</h2>`;  
  const divElement = document.createElement('div');
  divElement.innerHTML = viewText;
  return divElement;
};

export const  router = async (route) => {
    
    let content = document.getElementById("root");
    console.log(route);
    switch (route) {
        case "#/register": {
            window.location.hash="#/register";
            content.innerHTML= registerView.render();
            await registerView.afterRender();
        break 
        }
        case "#/login": {
            window.location.hash="#/login"
            return content.appendChild(loginView());
            break
        }

        case "" : {
            
            return content.appendChild(loginView());
            break

        }
        default:
            return console.log('404 Not Found');;
            break
    }
};

let btnPrueba=document.getElementById("btnPrueba");
btnPrueba.addEventListener("click", ()=>{router("#/register")});


