module.exports = ({lineupsRepository}) => async() =>{
	try{
		const players = await lineupsRepository.find();
		return players;
	}	
	catch (err){
		return err;	}
}