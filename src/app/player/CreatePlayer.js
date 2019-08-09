const Player = require(process.cwd()+'/src/app/domain/entities/Player');

module.exports = ({playersRepository}) => async(name, number, position) =>{
	try{
		const player = new Player(null, name, number, position, null);

		const newPlayer = await playersRepository.create(player);
		return newPlayer;
	}	
	catch (err){
		return err;	}
}