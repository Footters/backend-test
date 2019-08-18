'use strict';

module.exports = class {
	constructor(id = null, type, minute, player) {
		this.id = id;
		this.type = type;
		this.minute = minute;
		this.player = player;
	}
};