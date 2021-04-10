const db = require('./Database')

const User = db.sequelize.define('user', {
    nome : {
        type : db.Sequelize.STRING
    },
    senha : {
        type : db.Sequelize.STRING
    },
    email : {
        type : db.Sequelize.STRING
    },
    idade : {
        type : db.Sequelize.INTEGER
    }
})

module.exports = User