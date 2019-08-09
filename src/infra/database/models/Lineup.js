const Sequelize = require('sequelize');
module.exports = (sequelize) =>{
	const Lineup = sequelize.define('lineup', {
		lineup: {
			type:Sequelize.ENUM,
			allowNull:false,
			values:['4-4-2', '4-3-3', '3-4-3']
		},
		name:{
			type: Sequelize.STRING,
			allowNull:false
		},
		numPlayers:{
			type: Sequelize.INTEGER,
			allowNull:false
		}
	});
	return Lineup
};
