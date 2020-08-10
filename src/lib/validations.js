export const profileEmailValidator = {
    pattern: /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/g,
    patternError: { title: 'Dirección correo electrónico invalida!', subTitle: 'Perdón, El correo electrónico  ingresado es invalido.' }
  };
  
export const profilePasswordValidator = {
  minLength: 5,
  lengthError: { title: 'Contraseña muy corta!', subTitle: 'Perdón, La contraseña debe contener mas de 4 caracteres.' },
  patternError: { title: 'Contraseña invalida!', subTitle: 'Perdón, La contraseña no puede contener caracteres especiales.' }
};
