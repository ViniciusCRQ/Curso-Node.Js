const db = require('./Database')

const Post = db.sequelize.define('postagens', {
    titulo : {
        type : db.Sequelize.STRING
    },
    conteudo : {
        type: db.Sequelize.TEXT
    }
})

//User.sync({force: true})

module.exports = Post