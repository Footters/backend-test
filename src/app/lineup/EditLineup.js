module.exports = ({lineupsRepository}) => async(newData, name) =>{
	try{
		const updatedPlayer = await lineupsRepository.update(newData, name);
		return updatedPlayer;
	}	
	catch (err){
		return err;	}
}