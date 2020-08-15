
const wall = () => {
    let content = document.getElementById("root");
    content.innerHTML = "";
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
    
    `
    ;

    let divElement = document.createElement('div');
    divElement.innerHTML = viewWall;
    return divElement;
};
    
export default wall;


// let btnSalir = document.getElementById("btnSalir");
// btnSalir.addEventListener("click", signOutUser);