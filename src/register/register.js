//Crear cuenta
import {createUser} from "/FireFunctions/createUser.js";


export const userRegister = () => {
  let userEmail = document.getElementById("emailRegister").value;
  let userPassword = document.getElementById("passRegister").value;
  createUser(userEmail, userPassword);
    
}