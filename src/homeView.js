
const home = ()=> { 
    let content = document.getElementById("root")
    content.innerHTML = '';
    const viewText = `<h1>Crea Tu Cuenta</h1>
    <p>Ingresa tus datos para crear tu cuenta</p>`;
    const divElement = document.createElement('div');
    divElement.innerHTML = viewText;
    return divElement;
};

export home;
