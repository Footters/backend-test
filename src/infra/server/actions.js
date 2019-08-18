'use strict';

const { Router } = require('express');
const router = new Router();
const ActionsController = require(process.cwd()+'/src/interface_adapters/controllers/ActionsController');


module.exports = () =>{
	router.use(function timeLog(req, res, next){
		console.log('Time: ', Date.now());
		next();
	});

	router.get('/', ActionsController.getActions());
	router.post('/', ActionsController.createAction());
	router.delete('/:id', ActionsController.deleteAction());

	return router;
}

