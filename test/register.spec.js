import mockFirebase from "../src/_mocks_/createUser"
global.firebase = mockFirebase();

import { createUser } from "../src/FireFunctions/createUser";

describe("testing de la función createUser de firebase", () => {

    test("createUser en una función", async () => {
        expect(typeof createUser).toBe("function");
    }),

    test("Se puede registrar un nuevo usuario con email y password", async () => {
        const data = await createUser("carosuarez90@gmail.com", "123456789");
        expect(data).toBe("Registrado Correctamente");
    }),

    test("No acepta correo inválido", async () => {
        const data = await createUser("caro", "123456789");
        expect(data).toBe("auth/invalid-email");
    }),

    test("La contraseña debe tener mínimo 6 caracteres", async () => {
        const data = await createUser("carosuarez90@gmail.com", "12345");
        expect(data).toBe("auth/weak-password");
    }),

    test("El mismo correo no se puede registrar más de una vez", async () => {
        const data = await createUser("blanquita@gmail.com", "32458712");
        expect(data).toBe("auth/email-already-in-use");
    })
});


