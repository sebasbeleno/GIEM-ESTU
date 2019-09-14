/** Importacion de modulos */
const express = require('express');
const app = express()
const path = require('path');
const passport = require('passport');
const flash = require('flash');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
//Procesa la informacion que llega del navegador
const bodyParser = require('body-parser');
//Administra las sessiones del navegador
const session = require('express-session');
const nodemailer = require('nodemailer')
//Url de la base de datos
const { url } = require('./config/database.js');

mongoose.connect(url, {
	
});


require('./config/passport')(passport);

//Configuraciones
app.set('port', process.env.PORT || 5151);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');





// middlewares
app.use(cookieParser());
//La informacion que resiva de los form, la puedo ver desde ls urhl
app.use(bodyParser.urlencoded({extended: false}));
// Esto, seria algo que quierere passport.
app.use(session({
	secret: 'giemjs',
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


require('./routes/index')(app, passport);
require('./routes/test')(app, passport, nodemailer);

//Static files
app.use(express.static(path.join(__dirname, 'public')));

/** iniciamos el server en el puerto 300m, una vez
 * inicado le decimos que ejecute una funcion que 
 * imprima por consola "server en el puerto 3000"
 */
app.listen(app.get('port'), function () {
    console.log('GIEM iniciado en: http://localhost/'+ app.get('port'));

});

