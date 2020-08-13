import {signOut} from "/FireFunctions/signOut.js";




const exit = {

    wathcher : firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    console.log(user);
                    // User is signed in.
                    var displayName = user.displayName;
                    var email = user.email;
                    var emailVerified = user.emailVerified;
                    var photoURL = user.photoURL;
                    var isAnonymous = user.isAnonymous;
                    var uid = user.uid;
                    var providerData = user.providerData;
                    

                } else {

                    // User is signed out.
                    console.log("no existe usuario");
                    
                
                }
            }),

    signOut
}

export default exit;