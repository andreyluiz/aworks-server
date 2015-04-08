//main.js

var express = require('express'),
	restful = require('node-restful'),
	bodyParser = require('body-parser'),
	mongoose = restful.mongoose;

var app = express();

app.use(bodyParser());
app.use(express.query());

var mongoLabUser = process.env.MONGOLAB_USER || 'admin';
var mongoLabPassword = process.env.MONGOLAB_PASSWORD || 'iN072wSEuB';
var mongoLabUri = process.env.MONGOLAB_URI || 'ds061621.mongolab.com';
var mongoLabPort = process.env.MONGOLAB_PORT || '61621';
var mongoLabDb = process.env.MONGOLAB_DB || 'aworks';

var mongoDbUri = 'mongodb://' + mongoLabUser + ':' + mongoLabPassword + '@' + mongoLabUri + ':' + mongoLabPort + '/' + mongoLabDb;

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

app.listen(process.env('PORT'));