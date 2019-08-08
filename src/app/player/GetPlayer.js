module.exports = ({playersRepository}) => async(playerName) =>{
	try{
		console.log("En la funcion")
		const player = await playersRepository.getByNickName(playerName);
		return player;
	}	
	catch (err){
		return err;	}
}