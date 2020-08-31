const auth = () => {
  return {
    signInWithEmailAndPassword: (email, pass) => {
      return new Promise((resolve, reject) => {
        (true)
          ? setTimeout(() => resolve("bienvenido"), 2000)
          : reject( new error("Por favor introduce un correo válido") ||  ("error contraseña incorrecta"));

        return {
          signInWithPopup: (provaider) => {
            return new Promise((resolve, reject) => {
              (true)
                ? setTimeout(() => resolve("object"), 2000)
                : reject( new error("error no terminaste de hacer el login con google") || ("error ya te encuentras registado con correo eletronico"))
           });
          },
        };
      });
    },
  };
};

const firebase = {
  auth: auth,
};

export default jest.fn(() => {
  return firebase;
});
