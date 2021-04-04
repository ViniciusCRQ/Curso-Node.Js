const express = require("../node_modules/express")

const app = express()


// o comando app.get serve para criar uma rota

app.get("/", function(req, res){

    res.send("Seja bem-vindo ao meu app!")

})

app.get("/sobre", function(req, res){

    res.send("Minha pagina!")

})


// abrir servidor express
app.listen(8086, function(){
    console.log("Servidor Rodando na url https://localhost:8086")
})

