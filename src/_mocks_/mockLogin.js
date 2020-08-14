const auth = () => {
    return {
        signInWithEmailAndPassword: (email, password) => {
            return  new Promise ((resolve) => {
                    resolve("el usuario si esta logeado")
                  })
                }

            }
        }

const firebase = {
    auth: auth
}

export default jest.fn(() => {
    return firebase;
})
