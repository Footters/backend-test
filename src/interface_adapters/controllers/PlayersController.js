'use strict';

const PlayerRepository = require(process.cwd()+'/src/app/repositories/PlayerRepository');

const PlayerRepositorySQL = require(process.cwd()+'/src/interface_adapters/storage/PlayerRepositorySQL');
const playerRepository = new PlayerRepository(new PlayerRepositorySQL());

const Player  = require(process.cwd()+'/src/app/player')(playerRepository);
const PATH_PATTERN = "api:players"
const CACHE_TTL = 20
module.exports = {

	getPlayerByNickName(){
		return async(req, res, next) =>{
			try{
				const nickName = req.params.nickName;
				const player = await Player.GetPlayer(nickName);
				return res.status(200).send({
					player:player
				});
			}
			catch(e){
				console.error(e);
				return res.sendStatus(500)
			}
			
		}
	},

	createPlayer(){
		return async(req, res, next) =>{
			try{
				const name = req.body.name;
				const number = req.body.number;
				const position = req.body.position;
				const playerCreated = await Player.CreatePlayer(name, number, position);
				return res.status(200).send({
					playerCreated:playerCreated
				});
			}
			catch(e){
				console.error(e);
				return res.sendStatus(500);
			}
		}
	},

	editPlayer(){
		return async(req, res, next) =>{
			try{
				const newData = req.body.change;
				const name = req.body.name;
				const playerUpdated = await Player.EditPlayer(newData, name);
				return res.status(200).send();
			}
			catch(e){
				console.error(e);
				return res.sendStatus(500);
			}
		}
	},
	deletePlayer(){
		return async(req, res, next) =>{
			try{
				const name = req.params.nickName;
				await Player.DeletePlayer(name);
				return res.status(200).send();
			}
			catch(e){
				console.error(e);
				return res.sendStatus(500);
			}
		}
	},

	getPlayers(cache){
		return async(req, res, next) =>{
			try{
				const page = req.query.page || 0;
				const pageSize = req.query.pageSize || 10;
				const position = req.query.position || null;
				const offset = page * pageSize;
				const limit = offset + pageSize;
				const players = await Player.GetPlayers(limit, offset, position);
				cache.set(PATH_PATTERN+":"+req.originalUrl, CACHE_TTL, PATH_PATTERN, players)
				return res.status(200).send(players);
			}
			catch(e){
				console.error(e);
				return res.sendStatus(500);
			}
		}
	}
}