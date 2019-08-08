'use strict';


const Sequelize = require('sequelize');
const sequelize = new Sequelize({dialect:'sqlite', storage: "./database.sqlite3"});

sequelize.import('./models/Player');
module.exports = sequelize;