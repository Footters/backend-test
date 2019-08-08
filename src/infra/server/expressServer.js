const express = require('express');
const bodyParser = require('body-parser');

const players = require('./players');

const expressServer = function(config){

	this.config = config || {};

	this.expressServer = express();
	this.expressServer.use(bodyParser.json());
	this.expressServer.use(bodyParser.urlencoded({extended:true}));
	this.expressServer.use('/api', players());
	this.expressServer.all('*',(req, res) => res.sendStatus(404));
}

module.exports = expressServer;