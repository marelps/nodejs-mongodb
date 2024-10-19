//conexão ao banco de dados
// => é igual a escrever function
/* () => {}
    function () {} */
const mongoose = require("mongoose")

// Configurando o mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/loja", {
    useMongoClient: true,
}).then(() => {
    console.log("mongoDB conectado");
}).catch((err) => {
    console.log("Houve um erro ao se conectar ao mongoDB: " + err);
});