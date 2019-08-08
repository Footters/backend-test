const Master = function(config){
	config = config || {};
	this.cluster = config.cluster;
};

Master.prototype.createWorker = function()  {
	var worker = this.cluster.fork();
	console.log("worker " + worker.id + " start");
};

Master.prototype.spawnWorker = function(waitInMillis) {
	var self = this;
	setTimeout(function () {
		self.createWorker();
	}, waitInMillis);
};

module.exports = Master;