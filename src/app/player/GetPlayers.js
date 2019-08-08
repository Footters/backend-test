const Player = require(process.cwd()+'/src/app/domain/entities/Player');

module.exports = ({playersRepository}) => async(limit, offset, position) =>{
	try{
		const where = {}
		if (position !== null){
				where.position = position
		}
		const players = await playersRepository.find(limit, offset, where);
		return players;
	}	
	catch (err){
		return err;	}
}