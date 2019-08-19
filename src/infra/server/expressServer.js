const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const players = require('./players');
const lineups = require('./lineups');
const actions = require('./actions');

const expressServer = function(config){

	this.config = config || {};

	this.expressServer = express();
	this.expressServer.use(helmet());
	this.expressServer.use(bodyParser.json());
	this.expressServer.use(bodyParser.urlencoded({extended:true}));
	this.expressServer.use('/api/players', players());
	this.expressServer.use('/api/lineups', lineups());
	this.expressServer.use('/api/actions', actions());
	this.expressServer.all('*',(req, res) => res.sendStatus(404));
}

module.exports = expressServer;