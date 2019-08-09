'use strict';

module.exports = class {
	constructor(id = null, nickName, number, position, teamId = null) {
		this.id = id;
		this.nickName = nickName;
		this.number = number;
		this.position = position;
		this.teamId = teamId;
	}
};