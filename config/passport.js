/** Cremos una nueva estrategia de autenticacion, este caso sera local. */
const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport')
/** Traemos los modelos que creamos anteriormente */


const Estudiantes = require('../models/estudiantes');

module.exports = function (passport) {


  passport.serializeUser(function (estu, done) {
    done(null, estu.id)
  })


  passport.deserializeUser(function (id, done) {
    Estudiantes.findById(id, function (err, estu) {
      done(err, estu)
    })
  })
  
  passport.use('estu-login', new LocalStrategy( {
    usernameField: 'emailEstu',
    passwordField: 'passwordEstu', 
    passReqToCallback: true
  }, 
  function (req, email, password, done) {
    Estudiantes.findOne({'estudiantes.correo': email}, function(err, estu){
      if(err) { return done(err) }
      if (!estu) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!estu.validPassword(password)) {
        return done(null, false, req.flash('loginMessage', 'Datos incorrectos'));
      }

      console.log("Lo que encontré: ", estu)
      return done(null, estu)
    })
  })) 
}
