module.exports = ({actionsRepository}) => async(id) =>{
	try{
		const deletedAction = await actionsRepository.delete(id);
		return deletedAction;
	}	
	catch (err){
		return err;	}
}