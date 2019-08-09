'use strict';


const Sequelize = require('sequelize');
const sequelize = new Sequelize({dialect:'sqlite', storage: "./database.sqlite3"});

const Player = sequelize.import('./models/Player');
const Lineup = sequelize.import('./models/Lineup');
Player.belongsTo(Lineup);

module.exports = sequelize;