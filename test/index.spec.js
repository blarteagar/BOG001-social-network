// importamos la funcion que vamos a testear
import { register } from "../src/firebaseFunctions/register.js";

//jest.mock("../src/lib/register.js");

describe('register', () => {
  it('debería ser una función', () => {
    expect(typeof register).toBe('function');
  });

  it('El correo del usuario 1 es válido', () => {
    return register("carosuarez90@gmail.com", "123456789").then(user => {
      expect(user.email).toBe("carosuarez90@gmail.com");
    })
  })
});

// test('the data is peanut butter', () => {
//   return fetchData().then(data => {
//     expect(data).toBe('peanut butter');
//   });
// });