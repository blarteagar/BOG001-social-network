import { editPost } from "/wall/editPost.js";
import { erasePost } from "/wall/erasePost.js";

export const wallView = {

  renderWall: () => {
    let content = document.getElementById("root");
    content.innerHTML = "";
<<<<<<< HEAD
    const viewWall =`
        
        <section id = "mainWall">
        <p> Welcome to your Wall </p>
        <p> Here you can see your posts, edit them or erase them </p>
        <p> also you can see how many likes they have </p>
        <p> Enjoy! </p>
        <button id="btnEdit"> Ed </button>
        <button id="btnErase"> Er </button>
        </section>
        
=======
    let viewWall =
    `
    
    <section id = "mainWall">
    <p> Welcome to your Wall </p>
    <p> Here you can see your posts, edit them or erase them </p>
    <p> also you can see how many likes they have </p>
    <p> Enjoy! </p>
    <button id="btnEdit"> Ed </button>
    <button id="btnSalir">SALIR_PRUEBA</button>
    </section>
    
>>>>>>> 5be91b4132f82ee3093b9a97438f44e3dbf3c216
    `
    return viewWall
  },

  afterRenderWall: async () => {
    let btnEdit = document.getElementById("btnEdit");
    btnEdit.addEventListener("click", editPost);

    let btnErase = document.getElementById("btnErase");
    btnErase.addEventListener("click", alert ('edit'));
  },

<<<<<<< HEAD
}
=======
    let divElement = document.createElement('div');
    divElement.innerHTML = viewWall;
    return divElement;
};
    
export default wall;


// let btnSalir = document.getElementById("btnSalir");
// btnSalir.addEventListener("click", signOutUser);
>>>>>>> 5be91b4132f82ee3093b9a97438f44e3dbf3c216
