'use strict';

const { Router } = require('express');
const router = new Router();
const PlayersController = require(process.cwd()+'/src/interface_adapters/controllers/PlayersController');



module.exports = () =>{
	router.use(function timeLog(req, res, next){
		console.log('Time: ', Date.now());
		next();
	});

	router.get('/player/:nickName', PlayersController.getPlayerByNickName())
	router.delete('/player/:nickName', PlayersController.deletePlayer())
	router.post('/player', PlayersController.createPlayer());
	router.put('/player', PlayersController.editPlayer());
	router.get('/players', PlayersController.getPlayers());

	return router;
}

