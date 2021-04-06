// iniciar o sequelize

const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', 'Crqmysql1678', {

    host: "localhost", 
    dialect: "mysql"

})

//Criando uma tabela

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

Postagem.create({
    titulo: "titulo comum",
    conteudo: "asafffafafsf"
    
})

const Usuario = sequelize.define('usuarios', {

    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }

})

Usuario.create({
    nome: "Vinicius",
    sobrenome: "Carvalho",
    idade: 16,
    email: "andre"
})




//sPostagem.sync({force: true})
//Usuario.sync({force: true})
