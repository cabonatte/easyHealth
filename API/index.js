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
    //User: Cliente e Profissional
    let usuarios = {
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        email: req.body.email,
        senha: req.body.senha,
        confirmaSenha: req.body.confirmaSenha
        
    }
    
    req.db.collection('cadastro')
    .insert(usuarios, (err, data) => {
        res.send(data);
    });
});


//post cadastro do perfil do Profissional
app.post('/profissional', (req, res) => {
    console.log(req.body);
    
    let perfilProfissional = {
        perfil: {
            imagem: req.body.imagem //foto de perfil
            
        },
        endereco: {
            cep: req.body.cep,
            rua: req.body.rua,
            numero: req.body.numero,
            complemento: req.body.complemento,
            bairro: req.body.bairro,
            cidade: req.body.cidade,
            estado: req.body.estado
        },
        
        dadosPessoais: {
            cpf: req.body.cpf,
            rg: req.body.rg,
            dataNascimento: req.body.dataNascimento,
            genero: req.body.genero,
            telefoneCelular: req.body.telefoneCelular,
            telefoneFixo: req.body.telefoneFixo
        }, 
        disponibilidade: {
            diasSemana: req.body.diasSemana,
            periodo: req.body.periodo,
            bairros: req.body.bairros
        },
        dadosProfissionais: {
            especialidades: req.body.especialidades, // especialidades selecionadas
            formacao: req.body.formacao,
            detalhes: req.body.detalhes
        }
        
    }
    
    req.db.collection('profissional')
    .insert(perfilProfissional, (err, data) => {
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

app.get('/cliente/:id', (req, res) => {
    let busca = {
        _id: new ObjectID(req.params.id)
    };
    
    req.db.collection('clientes')
    .findOne(busca, (err, data) => {
        res.send(data);
    });
});

//Para deleter os dados do profissional
app.delete('/profissional', (req,res) => {
    req.db.collection('profissional')
    .remove({})
    res.send('DELETE request');
});



app.listen(3000, () => {
    console.log('Servidor rodando na 3000'); 
});