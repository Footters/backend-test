'use strict';

const { Router } = require('express');
const router = new Router();
const PlayersController = require(process.cwd()+'/src/interface_adapters/controllers/PlayersController');



module.exports = () =>{
	router.use(function timeLog(req, res, next){
		console.log('Time: ', Date.now());
		next();
	});

	router.get('/:nickName', PlayersController.getPlayerByNickName())
	router.delete('/:nickName', PlayersController.deletePlayer())
	router.post('/', PlayersController.createPlayer());
	router.put('/', PlayersController.editPlayer());
	router.get('/', PlayersController.getPlayers());

	return router;
}

