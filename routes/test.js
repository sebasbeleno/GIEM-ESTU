module.exports = (app, passport) => {

    const  MongoClient = require('mongodb').MongoClient
  
    var db
  
    MongoClient.connect('mongodb+srv://admin:GIEM@giem-4mkhr.mongodb.net/login-node?retryWrites=true&w=majority', (err, client) => {
    if (err) return console.log(err)
        db = client.db('login-node') // whatever your database name is
    })
  
  
  
      app.get('/test', (req, res) => {
        res.render('test')
      })
  
  
      app.post('/test', (req, res) => {
        //res.send(req.body)
        
        let actividadesAireLibre = 0
        let Mecanicos = 0
        let Calculo = 0
        let Cientificos = 0 
        let Persuasivos  = 0
        let ArtísticosPlásticos = 0
        let Literarios = 0
        let Musicales = 0
        let ServicioSocial = 0
        let archivistica = 0

        
        actividadesAireLibre += +req.body.p19
        actividadesAireLibre += +req.body.p2
        actividadesAireLibre += +req.body.p3
        actividadesAireLibre += +req.body.p4
        actividadesAireLibre += +req.body.p5
        actividadesAireLibre += +req.body.p6

        Mecanicos += +req.body.p7
        Mecanicos += +req.body.p8
        Mecanicos += +req.body.p9
        Mecanicos += +req.body.p10
        Mecanicos += +req.body.p11
        Mecanicos += +req.body.p12

        Calculo += +req.body.p13
        Calculo += +req.body.p14
        Calculo += +req.body.p15
        Calculo += +req.body.p16
        Calculo += +req.body.p17
        Calculo += +req.body.p18

        Cientificos += +req.body.p19
        Cientificos += +req.body.p20
        Cientificos += +req.body.p21
        Cientificos += +req.body.p22
        Cientificos += +req.body.p23
        Cientificos += +req.body.p24

        Persuasivos += +req.body.p25
        Persuasivos += +req.body.p26
        Persuasivos += +req.body.p27
        Persuasivos += +req.body.p28
        Persuasivos += +req.body.p29
        Persuasivos += +req.body.p30

        ArtísticosPlásticos += +req.body.p31
        ArtísticosPlásticos += +req.body.p32
        ArtísticosPlásticos += +req.body.p33
        ArtísticosPlásticos += +req.body.p34
        ArtísticosPlásticos += +req.body.p35
        ArtísticosPlásticos += +req.body.p36

        Literarios += +req.body.p37
        Literarios += +req.body.p38
        Literarios += +req.body.p39
        Literarios += +req.body.p40
        Literarios += +req.body.p41
        Literarios += +req.body.p42

        Musicales += +req.body.p43
        Musicales += +req.body.p44
        Musicales += +req.body.p45
        Musicales += +req.body.p46
        Musicales += +req.body.p47
        Musicales += +req.body.p48

        ServicioSocial += +req.body.p49
        ServicioSocial += +req.body.p50
        ServicioSocial += +req.body.p51
        ServicioSocial += +req.body.p52
        ServicioSocial += +req.body.p53
        ServicioSocial += +req.body.p54

        
        archivistica += +req.body.p55
        archivistica += +req.body.p56
        archivistica += +req.body.p57
        archivistica += +req.body.p58
        archivistica += +req.body.p59
        archivistica += +req.body.p60
        

        //console.log("Al aire libre ", actividadesAireLibre, " Mecanicos: ", Mecanicos, " Calculo", Calculo, " cientifico: ", Cientificos, ", Persuasivo: " + Persuasivos + ", artisticos ", ArtísticosPlásticos, ", literarios: ", Literarios, ", musicales: ", Musicales, ", servicio: ", ServicioSocial, ", archivisticos: ", archivistica )


        var todas = [actividadesAireLibre, Mecanicos, Calculo, Cientificos, Persuasivos, ArtísticosPlásticos, Literarios, Musicales, ServicioSocial, archivistica]
        var n, i, k, aux
        n = todas.length
        console.log(todas)

        for (let k = 1; k < n; k++) {
            for (let i = 0; i < (n - k); i++) {
                if (todas[i] < todas[i + 1]) {
                    aux = todas [i]
                    todas[i] = todas[i + 1]
                    todas[i + 1] = aux
                }
                
            }
        }

        console.log(todas)
        res.send(todas)
         


      })
  
      app.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/');
      });
     
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
    
  