//evento.js

// Aqui estou usando o Mongoose + MongoLab. O Mongoose é um pacote do Node.js. O MongoLab é um serviço em nuvem que 
// permite a criação e acesso a bancos de dados MongoDB.

// Dados de conexão ao banco de dados. As da esquerda são variáveis de ambiente que estarão no Heroku (o web server).
var MONGOLAB_USER;
var MONGOLAB_PASSWORD;
var MONGOLAB_URI;
var mongoDbUser = MONGOLAB_USER || "admin"
var mongoDbPassword = MONGOLAB_PASSWORD || "iN072wSEuB"
var mongoDbUri = MONGOLAB_URI || "mongodb://" + MONGOLAB_USER + ":" + MONGOLAB_PASSWORD + "@ds061621.mongolab.com:61621/aworks"

var mongoose = require('mongoose');
mongoose.connect(mongoDbUri);

// Schema de eventos pra que possamos fazer o crud.
var eventoSchema = new mongoose.Schema({
	evento_id: 		{type: Number},
	nome: 			{type: String, maxLength: 255},
	valor_minimo: 	{type: Number, max: 15, default: 0},
	variacao: 		{type: Number, max: 15, default: 0},
	data_cadastro: 	{type: Date, default: Date.now},
	data_limite: 	{type: Date}
});

// Criando um módulo pra usar em outros lugares
module.exports = mongoose.model('Evento', eventoSchema);