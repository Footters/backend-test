const Player = require(process.cwd()+'/src/app/domain/entities/Player');

module.exports = ({playersRepository}) => async(name) =>{
	try{
		const updatedPlayer = await playersRepository.delete(name);
		return updatedPlayer;
	}	
	catch (err){
		return err;	}
}