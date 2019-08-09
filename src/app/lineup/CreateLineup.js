const Lineup = require(process.cwd()+'/src/app/domain/entities/Lineup');

module.exports = ({lineupsRepository}) => async(name, lineup, numPlayers) =>{
	try{
		const lineupObject = new Lineup(null, name, lineup, numPlayers);
		const newLineup = await lineupsRepository.create(lineupObject);
		return newLineup;
	}	
	catch (err){
		return err;	}
}