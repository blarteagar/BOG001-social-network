//Generando la vista Wall (módulo aparte con export default ()=>{} const Wall =>{})
export const viewWall = () => {
    let content = document.getElementById("root")//Llamando a la sección HTML donde mostraremos contenido
    content.innerHTML = '';//Inicialmente el content va a estar vacío
    const viewText = `<h1>Wall</h1>
    <p>Bienvenido a tu muro de publicaciones</p>`;//Plantilla de HTML inserta en JavaScript
    const divElement = document.createElement('div'); //Elemento HTML creado con JavaScript
    divElement.innerHTML = viewText; //Inserción de viewText (un string) en el elemento con innerHTML
    return divElement;
};