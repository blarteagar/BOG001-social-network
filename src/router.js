const register = ()=> { 
    let content = document.getElementById("root");
    content.innerHTML = '';
    const viewText = `<h1>Crea Tu Cuenta</h1>
    <p>Ingresa tus datos para crear tu cuenta</p>
    <form>
      <input type="button" value="Iniciar con google" id="signIn">
      <input type="text" id="nameRegister" placeholder="Nombre">
      <input type="email" id="emailRegister" placeholder="Email">
      <input type="password" id="passRegister" placeholder="Crea tu contraseña">
    </form>`;
    const divElement = document.createElement('div');
    divElement.innerHTML = viewText;
    return divElement;

};

const registerView = () => {
  let content = document.getElementById("root")//Llamando a la sección HTML donde mostraremos contenido
  content.innerHTML = '';//Inicialmente el content va a estar vacío
  const viewText = `<h1>Wall</h1>
  <p>Bienvenido a tu muro de publicaciones</p>
  <form id="form">
  <input type="email" id="emailLogin" placeholder="Ingresa tu email" required>
  <input type="password" id="passLogin" placeholder="ingresa tu contraseña" required>
  <input type="button" value="Ingresar" id="entrar">
  </form>`;
  const divElement = document.createElement('div');
  divElement.innerHTML = viewText; //Inserción de viewText (un string) en el elemento con innerHTML
  return divElement;
};


const router = () => {
    
    let route = window.location.hash; //este valor localiza un elemento hash en la ventana
    let content = document.getElementById("root");//Llamando a la sección HTML donde mostraremos contenido
    
    switch (route) {
        case "#/Register": {
            return content.appendChild(registerView());//Por el momento, retornamos "vistas"
        }
        case "#/Login": {
            //Llamar a la función LogIn para que el usuario se loguee;
            return content.appendChild(home());//Por el momento, retornamos "vistas"
        }
        default:
            return console.log('404 Not Found');;
    }
};

window.addEventListener("hashchange", router);

