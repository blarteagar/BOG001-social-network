import { signOutUser } from "../FireFunctions/signOut.js"
import { router } from "../router.js";

const wallView = {

  render: async () => {
    let content = document.getElementById("root");
    content.innerHTML = "";
    const view = `
    
    <div class="grid">
    <div class="logoWall">
    <h1 class="techWall"> |Tech<span class="meWall">Me</span></h1></div>
    </div>
    <div class="navWall">
    <span class="itemWall"><button id="btnWallWall">muro</button></span>
    <span class="itemWall"><button id="btnNewsWall">noticias</button></span>
    <span class="itemWall"><button id="btnOutWall">salir</button></span>
    </div>
    <div class="hereWall">
    <p>Aquí podrás compartir tu idea, apoyar otros proyectos, dar like y compartir tus conocimientos</p>
    </div>
    <div class="ideaWall">
    <p>Comparte la idea de tu proyecto</p>
    </div>
    <div class="shareWall">
    <p class="shareText">Escribe en este espacio:</p>
    <input class = "writePost" type = textarea maxlength = 120 placeholder = "Al contrario de la creencia popular, el texto de Lorem Ipsum no">
    <button id="btnShareWall">compartir</button>
    <button id="btnEditWall">editar</button>
    <button id="btnEraseWall">borrar</button>
    </div>   
    </div>
    <div class="footWall">
    <p>Made with love by Laboratorians</p>
    <p>(c) Blanca Arteaga - Caro Suarez - Daniela Ramírez 2020</p>
    </div>    
    </div>

    `

    return view;
  },

  afterRender: () => {
    let btnWallWall = document.getElementById("btnWallWall");
    btnWallWall.addEventListener("click", () => {
    console.log("vamos al muro")
});
    
    let btnNewsWall = document.getElementById("btnNewsWall");
    btnNewsWall.addEventListener("click", () => {
    console.log("vamos al timeline")
});
    
    let btnOutWall = document.getElementById("btnOutWall");
    btnOutWall.addEventListener("click", () => {
    signOutUser();
    history.go(-history.length);
    router("");
    console.log("nos vamos :-(");
});
    let btnShareWall = document.getElementById("btnShareWall");
    btnShareWall.addEventListener("click", () => {
      console.log("compartiendo")
});
    let btnEditWall = document.getElementById("btnEditWall");
    btnEditWall.addEventListener("click", () => {
      console.log("editando")
});
    let btnEraseWall = document.getElementById("btnEraseWall");
    btnEraseWall.addEventListener("click", () => {
      console.log("borrando")
});
},

};

export default wallView;