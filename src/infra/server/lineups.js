'use strict';

const { Router } = require('express');
const router = new Router();
const LineupsController = require(process.cwd()+'/src/interface_adapters/controllers/LineupsController');


module.exports = () =>{
	router.use(function timeLog(req, res, next){
		console.log('Time: ', Date.now());
		next();
	});
	router.post('/', LineupsController.createLineup());
	router.get('/', LineupsController.getLineups());
	router.put('/:name', LineupsController.editLineup());
	router.delete('/:name', LineupsController.deleteLineup());
	router.put('/:team/:name', LineupsController.addPlayer());
	return router;
}
