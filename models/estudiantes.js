const mongoose = require('mongoose');

/** Es un modulo que nos ayuda a encriptar nuestras
 * passwords de una manera más segura
 */const bcrypt = require('bcrypt-nodejs');
const estuSchema = new mongoose.Schema({
  estudiantes: {
    nombre: String,
    correo: String,
    password: String,
    psicoEmail: String
  } 
});

estuSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

estuSchema.methods.validPassword = function( password ) {
  return ( this.estudiantes.password === password );
};

 
  
module.exports = mongoose.model('Estudiantes', estuSchema);

