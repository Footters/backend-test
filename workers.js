/**
 * Module dependencies.
 */
const http = require('http');
const fs = require('fs');

const sequelize = require(process.cwd()+'/src/infra/database/sequelize');

const expressServer = require(process.cwd()+'/src/infra/server/expressServer');


const Workers = function(config){
	this.config = config;
	
	const app = new expressServer(this.config);
	this.serverhttp = http.createServer(app.expressServer);
};

Workers.prototype.run = async function(){
	const self = this;
	const PORT = process.env.PORT || 8080;
	try{
		await sequelize.sync();
		console.log('Connection to DB has been established successfully.');
		self.serverhttp.listen(PORT, function(){
			console.log("Rest Server started at port: " + PORT);
		});
	}
	catch(err){
		console.error('Unable to connect to the database:', err);
		process.exit(1);
	}
	
	
};

if(module.parent){
	module.exports = Workers;
} else {
	new Workers();
	console.log('debugger');
}