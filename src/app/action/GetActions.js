const Player = require(process.cwd()+'/src/app/domain/entities/Action');

module.exports = ({actionsRepository}) => async(limit, offset, player) =>{
	try{
		const where = {}
		if (player !== null){
				where.player = player
		}
		const actions = await actionsRepository.find(limit, offset, where);
		return actions;
	}	
	catch (err){
		console.error(err);
		return err;	}
}