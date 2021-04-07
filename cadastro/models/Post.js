const db = require('./Database')

const Post = db.sequelize.define('postagens', {
    titulo : {
        type : db.Sequelize.STRING,
        conteudo : db.Sequelize.TEXT
    }
})

//Post.sync({force: true})

module.exports = Post