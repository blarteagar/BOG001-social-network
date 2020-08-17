import mockFirebase from '../src/_mocks_/createUser-mock';
import { createUser } from '../src/FireFunctions/createUser';

global.firebase = mockFirebase();


// describe("testing de la función createUser de firebase", () => {
//     it("Se puede registrar un nuevo usuario con email y password", () => {
//         return createUser("carosuarez90@gmail.com", "123456789").then((data) => {
//             expect(data).toBe("prueba");
//         });
//    })
// });


describe("createUser", () => {
    it("debería poder registrar un nuevo usuario", () => {
        return expect(createUser("carosuarez90@gmail.com", "123456789")).resolves.toBe('prueba');
    })
});