const express = require("../node_modules/express")
const app = express()
const handlebars = require('../node_modules/express-handlebars')
const Sequelize = require('sequelize')

// Config
    //  Template Engine
    app.engines('handlebars', handlebars({
        defaultLayout : 'main'
    }))
    app.set('view engine', 'handlebars')
    // Conexão database MYSQL
    const sequelize = new Sequelize('teste', 'root', 'Crqmysql1678', {
        host: "localhost", 
        dialect: "mysql"
    })

//rotas

    app.get('/cad', function(re, res){
        res.send('rota de cadastro de posts')
    })

// abrir servidor express
app.listen(8086, function(){
    console.log("Servidor Rodando na url https://localhost:8086")
})

