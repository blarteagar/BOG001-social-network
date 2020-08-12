//
const wall = () => {
    let content = document.getElementById("root");
    content.innerHTML = '';
    const viewText = `<h1>Wall</h1>
    <p>Bienvenido a tu muro de publicaciones</p>`;
    const divElement = document.createElement('div');
    divElement.innerHTML = viewText;
    return divElement;
};

export default