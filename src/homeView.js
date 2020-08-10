
export const viewRegister = ()=> { //Nota de caro:Le quito el parámetro porque no se está utilizando.
    let content = document.getElementById("root")//Llamando a la sección HTML donde mostraremos contenido
    content.innerHTML = '';//Inicialmente el content va a estar vacío
    const viewText = `<h1>Crea Tu Cuenta</h1>
    <p>Ingresa tus datos para crear tu cuenta</p>`;//Plantilla de HTML inserta en JavaScript
    const divElement = document.createElement('div'); //Elemento HTML creado con JavaScript
    divElement.innerHTML = viewText; //Inserción de viewText (un string) en el elemento con innerHTML
    return divElement;
};