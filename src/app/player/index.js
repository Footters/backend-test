module.exports =(playersRepository) =>{
	return {
		GetPlayer: require('./GetPlayer')({playersRepository}),
		CreatePlayer:require('./CreatePlayer')({playersRepository}),
		EditPlayer:require('./EditPlayer')({playersRepository}),
		DeletePlayer:require('./DeletePlayer')({playersRepository}),
		GetPlayers:require('./GetPlayers')({playersRepository})
	}
}