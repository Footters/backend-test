'use strict'


module.exports = class{
	constructor(repository){
		this.repository = repository;
	}

	create(actionEntity){
		return this.repository.create(actionEntity);
	}

	delete(id){
		return this.repository.delete(id);
	}

	find(limit, offset, filter){
		return this.repository.find(limit, offset, filter);
	}

}