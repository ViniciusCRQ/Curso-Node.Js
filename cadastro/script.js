const express = require("../node_modules/express")
const app = express()
const handlebars = require('../node_modules/express-handlebars')
const bodyParser = require('../node_modules/body-parser')
const Post = require('./models/Post')
//const User = require('./models/User')


// Config
    //  Template Engine
        app.engine('handlebars', handlebars({
            defaultLayout : 'main',
            allowProtoPropertiesByDefault: true
        }))
        app.set('view engine', 'handlebars')
    //body parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())    

//rotas
    app.get('/', function(req, res){
        Post.findAll({order: [['id', 'ASC']]}).then(function(posts){
            res.render('home', {posts: posts})
        })
    })
    app.get('/cad', function(req, res){
        res.render('formulario')
    })

    app.post('/add', function(req, res){
        Post.create({
            titulo : req.body.titulo,
            conteudo : req.body.conteudo
        }).then(function(){// serve para ver o processo ocorreu com sucesso
            res.redirect('/')
        }).catch(function(erro){
            res.send('Erro ao enviar o post!' + erro)
        })
    })

   app.get('/cadastrar', function(req, res){
        res.render('cadastrouser')
    })

    app.post('/cadastrado', function(req, res){
        User.create({
            nome : req.body.nome,
            senha : req.body.senha,
            email : req.body.email,
            idade : req.body.idade
        }).then(function(){
            res.send('Usuario criado com sucesso!')
        }).catch(function(erro){
            res.send('Erro ao cadastrar o usuario!' + erro)
        })
    })

    app.get('/deletar/:id', function(req, res){
        Post.destroy({where: {'id': req.params.id}}).then(function(){
            res.render('post-deletado')
        }).catch(function(erro){
            res.send('Essa postagem não existe!')
        })
    })
      
    app.post('/voltar', function(req, res){
        res.redirect('/')
    })

    app.post('/search', function(req, res){
        Post.findAll({order: [['titulo', 'ASC']]}).then(function(posts){
            res.render('searched', {posts: posts})
        })
    })

// abrir servidor express
app.listen(8086, function(){
    console.log("Servidor Rodando na url https://localhost:8086")
})

