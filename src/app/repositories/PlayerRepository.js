'use strict';


module.exports = class{
	constructor(repository){
		this.repository = repository;
	}

	getByNickName(nickName){
		return this.repository.getByNickName(nickName);
	}

	create(playerEntity){
		return this.repository.create(playerEntity);
	}

	update(newData, name){
		return this.repository.update(newData, name);
	}

	delete(name){
		return this.repository.delete(name);
	}

	find(limit, offset, filter){
		return this.repository.find(limit, offset, filter);
	}
}