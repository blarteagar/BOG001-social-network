import {router} from "/router.js";
import { windowModal } from './component/modal.js'
import { watcher } from "./FireFunctions/signOut.js";


window.addEventListener('load', () => {
    console.log("está corriendo el load")
    console.log('el state es:' + event.state);
    console.log('el hash es:' + location.hash);
    router(location.hash)});


windowModal.render();
windowModal.afterRender();
watcher();




window.addEventListener('popstate', function(event) {
    console.log("está corriendo el popstate")
    console.log('el state es:' + event.state);
    console.log('el hash es:' + location.hash);
    router(location.hash)
  });

