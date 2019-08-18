'use strict';

const ActionRepository = require(process.cwd()+'/src/app/repositories/ActionRepository');

const ActionRepositorySQL = require(process.cwd()+'/src/interface_adapters/storage/ActionRepositorySQL');
const actionRepository = new ActionRepository(new ActionRepositorySQL());

const Action  = require(process.cwd()+'/src/app/action')(actionRepository);

module.exports = {

	createAction(){
		return async(req, res, next) =>{
			try{
				const type = req.body.type;
				const minute = req.body.minute;
				const player = req.body.player;
				const actionCreated = await Action.CreateAction(type, minute, player);
				return res.status(200).send();
			}
			catch(e){
				console.error(e);
				return res.sendStatus(500);
			}
		}
	},

	deleteAction(){
		return async(req, res, next) =>{
			try{
				const id = req.params.id;
				await Action.DeleteAction(id);
				return res.status(200).send();
			}
			catch(e){
				console.error(e);
				return res.sendStatus(500);
			}
		}
	},

	getActions(){
		return async(req, res, next) =>{
			try{
				const page = req.query.page || 0;
				const pageSize = req.query.pageSize || 10;
				const player = req.query.player || null;
				if (player === null){
					return res.status(404).send();
				}
				const offset = page * pageSize;
				const limit = offset + pageSize;
				const actions = await Action.GetActions(limit, offset, player);
				return res.status(200).send(actions);
			}
			catch(e){
				console.error(e);
				return res.sendStatus(500);
			}
		}
	}
}