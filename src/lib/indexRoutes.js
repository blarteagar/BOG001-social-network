import home from './lib/homeView.js';
import wall from './lib/wallView.js';

//Función enrutadora
export const router = (route) => {
    switch (route) {
        case "#/Home": {
            return content.appendChild(home());
        }
        case "#/Wall": {
            return content.appendChild(wall());
        }
        case "#/News": {
            return content.appendChild(news());
        }
        case "#/Logout": {
            return content.appendChild(logout());
        }
        default:
            return console.log('404 Not Found');
    }
};
