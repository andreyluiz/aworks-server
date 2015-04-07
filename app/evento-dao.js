var Evento = require('./evento.js');

var dao = {};

dao.add = function(object) {
	Evento.create(object, function(err, evento) {
		if (err) throw err;
		console.log(evento);
	});
};

dao.get = function(id) {
	Evento.findById(id, function(err, evento) {
		if (err) throw err;
		return evento;
	});
};

dao.getAll = function() {
	Evento.find(function(err, eventos) {
		if (err) throw err;
		return eventos;
	});
};

dao.update = function(object) {
	Evento.findByIdAndUpdate(object._id, object, function(err, count, raw) {
		if (err) throw err;
		console.log(count + " lines updated.");
	});
};

dao.remove = function(id) {
	Evento.findByIdAndRemove(id, function(err) {
		if (err) throw err;
		console.log(id + " was removed.");
	});
};

module.exports.dao = dao;