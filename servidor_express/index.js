const express = require("../node_modules/express")

const app = express()


app.get("/", function(req, res){

    res.send("Seja bem-vindo ao meu app!")

})

app.get("/sobre", function(req, res){

    res.send("Minha pagina!")

})
aa

app.listen(8086, function(){
    console.log("Servidor Rodando na url https://localhost:8086")
})

