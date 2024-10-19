//conexão ao banco de dados
// => é igual a escrever function
/* () => {}
    function () {} */
const mongoose = require("mongoose")

// Configurando o mongoose
// mongoose.Promise = global.Promise; (não é mais necessário a utilização desse comando nas versões mais recentes do mongoose)
mongoose.connect("mongodb://localhost:27017/loja").then(() => {
    console.log("mongoDB conectado");
}).catch((err) => {
    console.log("Houve um erro ao se conectar ao mongoDB: " + err);
});

// Model - Usuários
// Definindo um model
const UsuarioSchema  = mongoose.Schema({

    nome: {
        type: String,
        require: true // campo obrigatório
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number, // não é int, ao utilizar para números como idada
        require: true
    },
    pais: {
        type: String
    }
})
// Collection
mongoose.model('usuarios', UsuarioSchema) 


const Vitoria = mongoose.model('usuarios')
new Vitoria({
    nome: "Vitória",
    sobrenome: "Garrucho",
    email: "vitoriagarrucho@gmail.com",
    idade: 24,
    pais: "Brasil"
}).save().then(() => {
    console.log("Usuário criado com sucesso")
}).catch((err) => {
    console.log("Houve um erro ao registar o usuário: +err")
})