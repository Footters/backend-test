'use strict'


const client = require(process.cwd()+'/src/infra/database/redis');

module.exports = class {
	constructor() {
		this.cache = client;
	}

	get(path){
		return new Promise((resolve, reject) =>{
			this.cache.get(path, (err, data) =>{
		        if (err) reject(new Error(err));

		        if (data !== null) {
		            resolve(data);
		        } else {
		            resolve(null);
		        }
		    });
		})
		
	}

	async set(path, time, pattern, result){
		this.cache.setex(path, time, JSON.stringify({response:result, pathPattern:pattern}));
	}

}
