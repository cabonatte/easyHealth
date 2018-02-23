const express = require('express');
const expressMongoDb = require('express-mongo-db');
const bodyParser = require('body-parser');
const cors = require('cors');
const ObjectID = require('mongodb').ObjectID;

const app = express();


app.use(expressMongoDb('mongodb://localhost/demoDayApi'));
app.use(bodyParser.json());
app.use(cors());

//busca os profissionais por localização
app.post('/buscaProfissional', (req, res) => {
    
    let local = {
        bairro: req.body.bairro
    } 

    req.db.collection('profissional')
    .find({bairros: local.bairro})
    .toArray((err, data) => {
        res.send(data)
    });
});

// login geral
app.post('/login', (req, res) => {  
    
    let login = {
        email: req.body.email,
        senha: req.body.senha
    }

    req.db.collection('cadastro')
    .findOne(login, (err, data) =>{
        if(data){
            res.send(data)
        }
        else{
            res.status(400).send({'mensagem':'erro de login'})
        }
    });
});

app.get('/cadastro', (req, res) => {
    req.db.collection('cadastro')
    .find({})
    .toArray((err, data) => {
        res.send(data);
    });
});

//post cadastro geral
app.post('/cadastro', (req, res) => {
    console.log(req.body);
    if(!req.body.nome || !req.body.senha ||!req.body.email){
        res.status(400).send({'mensagem': 'Dados não preenchidos'});
        return;
    }

    let usuarios = {
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
        confirmaSenha: req.body.confirmaSenha,
        sexo: req.body.sexo,
        telefone: req.body.telefone
    }

    req.db.collection('cadastro')
    .insert(usuarios, (err, data) => {
        res.send(data);
    });
});


//post cadastro do perfil do Profissional
app.post('/profissional', (req, res) => {
    console.log(req.body);

    let perfil = {
        imagem: req.body.imagem, //foto de perfil
        bairros: req.body.bairros,  //bairros atendidos
        especialidades: [], // especialidades selecionadas
        formacao: req.body.formacao,
        detalhes: req.body.detalhes
    }

    req.db.collection('profissional')
    .insert(perfil, (err, data) => {
        res.send(data);
    });
});


app.get('/profissional', (req, res) => {
    req.db.collection('profissional')
    .find({})
    .toArray((err, data) => {
        res.send(data);
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando na 3000'); 
});