import {router} from "/router.js";
window.addEventListener('load', () =>{router(window.location.hash)});
console.log(window.location.hash);
