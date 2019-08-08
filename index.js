const cluster = require("cluster");
//const config = require('./configuration/config');

if (cluster.isMaster) {

	const Master = require("./master");
	const master = new Master({cluster: cluster});
	const cpuCount = require("os").cpus().length;

	for (var i = 0; i < cpuCount; i++) {
		master.createWorker();
	}

	cluster.on("exit",  (worker) => {
		console.log("worker " + worker.id + "  died");
		master.spawnWorker(500);
	});
} else {
	const Workers = require("./workers");
	const workers = new Workers({});
	workers.run();
	
}
