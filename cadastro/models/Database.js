const Sequelize = require('sequelize')
// Conexão database MYSQL
    const sequelize = new Sequelize('postapp', 'root', 'Crqmysql1678', {
        host: "localhost", 
        dialect: "mysql"
    })

//Exportando as duas const
module.exports = {
    Sequelize : Sequelize,
    sequelize : sequelize
}