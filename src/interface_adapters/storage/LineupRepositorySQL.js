'use strict';

const Lineup = require(process.cwd()+'/src/app/domain/entities/Lineup');
const sequelize = require(process.cwd()+'/src/infra/database/sequelize');
module.exports = class {
	constructor() {
		this.db = sequelize;
		this.model = this.db.model('lineup')
	}


	async create(lineupEntity){
		const {name, lineup, numPlayers} = lineupEntity;
		const seqLineup = await this.model.create({name, lineup, numPlayers});
		await seqLineup.save();
 		return new Lineup(seqLineup.id, seqLineup.name, seqLineup.lineup, seqLineup.numPlayers);
	}

	async find(){
		const seqLineup = await this.model.findAll();
    	return seqLineup.map((seqLineup) => {
      		return new Lineup(seqLineup.id, seqLineup.name, seqLineup.lineup, seqLineup.numPlayers);
    	});
	}

	async update(newData, name){
		const seqLineup = await this.model.update(newData, {where:{name:name}});
 		return null;
	}

	async delete(name){
		const seqLineup = await this.model.destroy({where:{name:name}});
		return null;
	}

	async findByName(name){
		const seqLineup = await this.model.findOne({where:{name: name}});
		if(seqLineup === undefined || seqLineup === null){
 			return null;
 		}
		return new Lineup(seqLineup.id, seqLineup.name, seqLineup.lineup, seqLineup.numPlayers);
	}

};