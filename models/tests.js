const mongoose = require('mongoose');

/** Es un modulo que nos ayuda a encriptar nuestras
 * passwords de una manera más segura
 */const bcrypt = require('bcrypt-nodejs');
const testSchema = new mongoose.Schema({
  test: {
    estudianteCorreo: String,
    psicoCorreo: String, 
    actividadesAireLibre: Number,
    Mecanicos: Number,
    Calculo: Number,
    Cientificos: Number,
    Persuasivos: Number,
    ArtísticosPlásticos: Number,
    Literarios: Number,
    Musicales: Number,
    ServicioSocial: Number,
    archivistica: Number,
    fecha: { type: Date, default: Date.now},

  } 
});

testSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

testSchema.methods.validPassword = function( password ) {
  return ( this.estudiantes.password === password );
};

 
  
module.exports = mongoose.model('Test', testSchema);

