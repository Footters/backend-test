module.exports = ({lineupsRepository, playersRepository}) => async(name, teamName) =>{
	try{
		const player = await playersRepository.getByNickName(name);
		if(player === undefined || player === null){
			return null
 		}
 		const team = await lineupsRepository.findByName(teamName);
 		if(team === undefined || team === null){
			return null
 		}
 		const playerUpdated = await playersRepository.update({teamId:team.id.toString()}, name);
		return playerUpdated;
	}	
	catch (err){
		return err;	}
}