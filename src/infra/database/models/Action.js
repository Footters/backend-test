const Sequelize = require('sequelize');
module.exports = (sequelize) =>{
	const Action = sequelize.define('action', {
		type: {
			type:Sequelize.ENUM,
			allowNull:false,
			values:['tarjeta roja', 'tarjeta amarilla', 'gol', 'gol en propia', 'asistencia']
		},
		minute:{
			type:Sequelize.INTEGER,
			allowNull:true
		},
		player:{
			type:Sequelize.STRING
		}

	});

	return Action;
};