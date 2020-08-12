// Este es el punto de entrada de tu aplicación
//import { myFunction } from './lib/index.js';

import router from '/lib/indexRoutes.js'

window.addEventListener('hashchange', ()=>{
    router(window.location.hash)
 });




