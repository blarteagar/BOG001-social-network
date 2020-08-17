
const auth = () => {
    return {
        createUserWithEmailAndPassword : (emailInput, passwordInput) => {
            return new Promise ((resolve) => {
                resolve('prueba');
                
                // if(emailInput!="" & passwordInput.length>5){
                        
                //         let user ={
                //             email,
                //             password
                //         };

                //         user.email = emailInput;
                //         user.password = passwordInput;     
                //         resolve("Usuario creado correctamente");
                //         return user;
                // } else if (emailInput=="") {
                //     reject("Por favor introduce un correo");
                // } else if (!emailInput.include("@")){
                //     reject("por favor introduce un correo válido");
                // } else if (passwordInput.length<6){
                //     reject("la contraseña debe tener mínimo 6 caracteres");
                // }                
            })            

        },

        currentUser : {
            email : "carosuarez90@gmail.com",
            password: "123456789"
        }
        


    }
}


const firebase = {
    auth: auth
}

export default jest.fn(() => {
    return firebase;
})