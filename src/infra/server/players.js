'use strict';

const { Router } = require('express');
const router = new Router();
const PlayersController = require(process.cwd()+'/src/interface_adapters/controllers/PlayersController');
const CacheRedis = require(process.cwd()+'/src/interface_adapters/cache/cacheRepositoryRedis');

const cacheRedis = new CacheRedis();
const cache = require(process.cwd()+'/src/interface_adapters/cache/cacheMiddleware.js');



module.exports = () =>{
	router.use(function timeLog(req, res, next){
		console.log('Time: ', Date.now());
		next();
	});

	router.get('/:nickName',cache("api:players",cacheRedis), PlayersController.getPlayerByNickName())
	router.delete('/:nickName', PlayersController.deletePlayer())
	router.post('/', PlayersController.createPlayer());
	router.put('/', PlayersController.editPlayer());
	router.get('/',cache("api:players",cacheRedis), PlayersController.getPlayers(cacheRedis));

	return router;
}

