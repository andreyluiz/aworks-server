//main.js

var express = require('express'),
	restful = require('node-restful'),
	bodyParser = require('body-parser'),
	mongoose = restful.mongoose;

var app = express();

app.use(bodyParser());
app.use(express.query());

var mongoDbUri = "mongodb://" + MONGOLAB_USER + ":" + MONGOLAB_PASSWORD + "@" + MONGOLAB_URI + ":" + MONGOLAB_PORT + "/" + MONGOLAB_DB;

mongoose.connect(mongoDbUri);

var Evento = app.resource = restful.model('evento', mongoose.Schema({
	evento_id: 		{type: Number},
	nome: 			{type: String, maxLength: 255},
	valor_minimo: 	{type: Number, max: 15, default: 0},
	variacao: 		{type: Number, max: 15, default: 0},
	data_cadastro: 	{type: Date, default: Date.now},
	data_limite: 	{type: Date}
})).methods(['get', 'post', 'put', 'delete']);

Evento.register(app, '/eventos');

app.listen(3000);