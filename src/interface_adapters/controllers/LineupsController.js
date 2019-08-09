'use strict';

const LineupRepository = require(process.cwd()+'/src/app/repositories/LineupRepository');
const LineupRepositorySQL = require(process.cwd()+'/src/interface_adapters/storage/LineupRepositorySQL');
const lineupRepository = new LineupRepository(new LineupRepositorySQL());

const PlayerRepository = require(process.cwd()+'/src/app/repositories/PlayerRepository');
const PlayerRepositorySQL = require(process.cwd()+'/src/interface_adapters/storage/PlayerRepositorySQL');
const playerRepository = new PlayerRepository(new PlayerRepositorySQL());



const Lineup  = require(process.cwd()+'/src/app/lineup')(lineupRepository, playerRepository);
module.exports = {

	createLineup(){
		return async(req, res, next) =>{
			try{
				const name = req.body.name;
				const lineup = req.body.lineup;
				const numPlayers = req.body.numPlayers;
				const lineupCreated = await Lineup.CreateLineup(name, lineup, numPlayers);
				return res.status(200).send({
					lineupCreated:lineupCreated
				});
			}
			catch(e){
				return res.sendStatus(500);
			}
		}
	},
	getLineups(){
		return async(req, res, next) =>{
			try{
			
				const lineup = await Lineup.GetLineups();
				return res.status(200).send(lineup);
			}
			catch(e){
				console.error(e);
				return res.sendStatus(500);
			}
		}
	},

	editLineup(){
		return async(req, res, next) =>{
			try{
				const newData = req.body.change;
				const name = req.params.name;
				const lineup = await Lineup.EditLineup(newData, name);
				return res.status(200).send();
			}
			catch(e){
				return res.sendStatus(500);
			}
		}
	},

	deleteLineup(){
		return async(req, res, next) =>{
			try{
				const name = req.params.name;
				const lineup = await Lineup.DeleteLineup(name);
				return res.status(200).send();
			}
			catch(e){
				return res.sendStatus(500);
			}
		}
	},

	addPlayer(){
		return async(req, res, next) =>{
			try{
				const name = req.params.name;
				const team = req.params.team;
				const lineup = await Lineup.AddPlayer(name, team);
				if(lineup === undefined || lineup === null){
					return res.status(404).send({"message":"player or team not exists"});
		 		}
				return res.status(200).send(lineup);
			}
			catch(e){
				return res.sendStatus(500);
			}
		}
	}


}