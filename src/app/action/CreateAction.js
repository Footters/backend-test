'use strict'

const Action = require(process.cwd()+'/src/app/domain/entities/Action');

module.exports = ({actionsRepository}) => async(type, minute, player) =>{
	try{
		const action = new Action(null, type, minute, player);

		const newAction = await actionsRepository.create(action);
		return newAction;
	}	
	catch (err){
		return err;	}
}