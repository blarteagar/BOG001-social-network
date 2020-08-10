// importamos la funcion que vamos a testear
import { register } from "../src/lib/register.js";
jest.mock("../src/lib/register.js");

describe('register', () => {
  it('debería ser una función', () => {
    expect(typeof register).toBe('function');
  });

  it('El correo del usuario 1 es válido', () => {
    let mockUser1=register(register.email, register.pass)
    expect(mockUser1.email).toBe("carosuarez90@gmail.com")
  })
});