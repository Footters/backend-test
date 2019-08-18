const Sequelize = require('sequelize');
module.exports = (sequelize) =>{
	const Player = sequelize.define('player', {
		nickName: {
			type:Sequelize.STRING,
			allowNull:false
		},
		number:{
			type:Sequelize.INTEGER,
			allowNull:false
		},
		position:{
			type:Sequelize.STRING
		},
		teamId:{
			type:Sequelize.STRING
		}

	});

	return Player;
};