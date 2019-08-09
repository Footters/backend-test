module.exports = ({lineupsRepository}) => async(name) =>{
	try{
		const updatedPlayer = await lineupsRepository.delete(name);
		return updatedPlayer;
	}	
	catch (err){
		return err;	}
}