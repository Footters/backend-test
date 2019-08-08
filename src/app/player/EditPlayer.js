const Player = require(process.cwd()+'/src/app/domain/entities/Player');

module.exports = ({playersRepository}) => async(newData, name) =>{
	try{
		const updatedPlayer = await playersRepository.update(newData, name);
		return updatedPlayer;
	}	
	catch (err){
		return err;	}
}