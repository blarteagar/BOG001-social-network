
const wallView = {

  renderWall: () => {
    let content = document.getElementById("root");
    content.innerHTML = "";
    const viewWall =`
        
        <section id = "mainWall">
        <p> Welcome to your Wall </p>
        <p> Here you can see your posts, edit them or erase them </p>
        <p> also you can see how many likes they have </p>
        <p> Enjoy! </p>
        <button id="btnEdit"> Ed </button>
        <button id="btnErase"> Er </button>
        </section>
        
    `
    return viewWall
  },

  afterRenderWall: () => {
    let btnEdit = document.getElementById("btnEdit");
    btnEdit.addEventListener("click", alert("edit"));

    let btnErase = document.getElementById("btnErase");
    btnErase.addEventListener("click", alert ('edit'));
  },

};
    
export default wallView;


// let btnSalir = document.getElementById("btnSalir");
// btnSalir.addEventListener("click", signOutUser);
