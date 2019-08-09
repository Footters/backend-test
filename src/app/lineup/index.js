module.exports =(lineupsRepository, playersRepository) =>{
	return {
		CreateLineup: require('./CreateLineup')({lineupsRepository}),
		GetLineups: require('./GetLineups')({lineupsRepository}),
		EditLineup:require('./EditLineup')({lineupsRepository}),
		DeleteLineup:require('./DeleteLineup')({lineupsRepository}),
		AddPlayer:require('./AddPlayer')({lineupsRepository, playersRepository})
	}
}
