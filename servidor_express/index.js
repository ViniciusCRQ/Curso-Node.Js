const express = require("../node_modules/express")

const app = express()


// o comando app.get serve para criar uma rota

app.get("/", function(req, res){

    res.sendFile(__dirname + "/index.html")

})

app.get("/sobre", function(req, res){

    res.send("Minha pagina!")

})

// Nesse exemplo aqui, foram adicionados os parâmetros nome e algumacoisa, a página só poderá
// ser aberta com o uso dos dois parametros, EX : localhost:8086/ola/Vinicius/Pedra
app.get("/ola/:nome/:algumacoisa", function(req, res){

    res.send("<h1>Ola " + req.params.nome + "</h1>")

})


// abrir servidor express
app.listen(8086, function(){
    console.log("Servidor Rodando na url https://localhost:8086")
})

