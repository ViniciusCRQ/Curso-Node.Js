const express = require("../node_modules/express")
const app = express()
const handlebars = require('../node_modules/express-handlebars')
const bodyParser = require('../node_modules/body-parser')
const Sequelize = require('sequelize')
// Config

    //  Template Engine
    app.engine('handlebars', handlebars({defaultLayout : 'main'}))
    app.set('view engine', 'handlebars')
    //body parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())    
    // Conexão database MYSQL
    const sequelize = new Sequelize('teste', 'root', 'Crqmysql1678', {
        host: "localhost", 
        dialect: "mysql"
    })

//rotas

    app.get('/cad', function(req, res){
        res.render('formulario')
    })

    app.post('/add', function(req, res){
        res.send("Texto: "+req.body.titulo + "Conteudo: "+req.body.conteudo)
    })

// abrir servidor express
app.listen(8086, function(){
    console.log("Servidor Rodando na url https://localhost:8086")
})

