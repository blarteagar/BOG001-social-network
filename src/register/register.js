import signInEmail from "./1fireFunctions/signInEmail.js";

//Generando la vista Wall (módulo aparte con export default ()=>{} const Wall =>{})
const userRegister = () => {
  let userEmail = document.getElementById("emailRegister").value;
  let userPassword = document.getElementById("passRegister").value;
  userEmail.trim();
  signInEmail(userEmail, userPassword);
    
}