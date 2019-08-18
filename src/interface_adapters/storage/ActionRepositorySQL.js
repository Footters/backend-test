'use strict';

const Action = require(process.cwd()+'/src/app/domain/entities/Action');
const sequelize = require(process.cwd()+'/src/infra/database/sequelize');
module.exports = class {
	constructor() {
		this.db = sequelize;
		this.model = this.db.model('action')
	}

	async create(actionEntity){
		const {type, minute, player} = actionEntity;
		const seqAction = await this.model.create({type, minute, player});
		await seqAction.save();
 		return new Action(seqAction.id, seqAction.type, seqAction.minute, seqAction.player);
	}

	async delete(id){
		const seqAction = await this.model.destroy({where:{id:id}});
		return null;
	}

	async find(limit, offset, filter){
		const seqAction = await this.model.findAll({limit, offset, where:filter});
    	return seqAction.map((seqAction) => {
      		return new Action(seqAction.id, seqAction.type, seqAction.minute, seqAction.player);
    	});
	}
};