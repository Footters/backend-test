'use strict';

module.exports = class {
	constructor(id = null, name, lineup, numPlayers) {
		this.id = id;
		this.name = name;
		this.lineup = lineup;
		this.numPlayers = numPlayers;
	}
};