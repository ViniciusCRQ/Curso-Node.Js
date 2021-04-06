const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', 'Crqmysql1678', {

    host: "localhost", 
    dialect: "mysql"

})

sequelize.authenticate().then(function(){
    console.log('Conectador com sucesso!')
}).catch(function(erro){
    console.log('Falha ao se conectar:' + erro)
})


