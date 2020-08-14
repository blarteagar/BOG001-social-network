// importamos la funcion que vamos a testear
//import { register } from "../src/firebaseFunctions/register.js";
import  MockLogin from  "../src/_mocks_/mockLogin"
import { loginWithEmail } from "../src/FireFunctions/signInEmailGoogle.js";
global.firebase = MockLogin();


//jest.mock("../src/lib/register.js");

// describe('register', () => {
//   it('debería ser una función', () => {
//     expect(typeof register).toBe('function');
//   });

//   it('El correo del usuario 1 es válido', () => {
//     return register("carosuarez90@gmail.com", "123456789").then(user => {
//       expect(user.email).toBe("carosuarez90@gmail.com");
//     })
//   })
// // });

// test('the data is peanut butter', () => {
//   return fetchData().then(data => {
//     expect(data).toBe('peanut butter');
//   });
// });


describe("loginWithEmail", () => {
it("deberia ser una funcion", () => {
expect(typeof loginWithEmail ).toBe('function');

it("deberia poder iniciar seccion con email: dora@gmail.com y password:123456789", () => {
  return loginWithEmail(email, password).then((data) =>{
    expect(data).toBe("email, password");
  })
})
})
}) 