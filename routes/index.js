module.exports = (app, passport, Estudiantes) => {
    app.get("/",   (req, res) => {
      res.render("index", {
        page: req.urlbr
      });
    });


    app.post('/loginEStu',  passport.authenticate("estu-login",  {
        successRedirect: "/perfil",
        failureRedirect: "/",
        failureFlash: true
      })
    );


    app.get('/perfil', isLoggedIn, (req, res) => {
        console.log("EL USUARIO QUE RESIVO DEL REQ.", req.user)
        res.render('perfil', {
          user: req.user
        })
    })
  
};
  
  /** Esto, es un middleware, que nos verifica si es usuario tiene una session abierta
   * en caso de que no, pidrá avanzar normlamente, pero en caso de que no halla inicado sesison
   * lo rederigimos al menú de inicio
   */
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
  
    res.redirect("/");
  }
  