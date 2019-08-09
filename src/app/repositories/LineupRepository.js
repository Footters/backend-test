'use strict';


module.exports = class{
	constructor(repository){
		this.repository = repository;
	}

	create(lineupEntity){
		console.log("redirect");
		return this.repository.create(lineupEntity);
	}

	find(){
		return this.repository.find();
	}

	update(newData, name){
		return this.repository.update(newData, name);
	}

	delete(name){
		return this.repository.delete(name);
	}

	findByName(name){
		return this.repository.findByName(name);
	}

}