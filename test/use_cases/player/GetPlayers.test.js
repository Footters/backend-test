const PlayerRepository = require(process.cwd()+'/src/app/repositories/PlayerRepository');
const mockPlayerRepository = new PlayerRepository();
const GetPlayers = require(process.cwd()+'/src/app/player/GetPlayers');

test('should resolve with all the players persisted in repository', async () => {
  // given
  mockPlayerRepository.find = () => [
    {
        "id": 1,
        "nickName": "iniesta",
        "number": 6,
        "position": "midfield",
        "teamId": "3"
    },
    {
    	"id":2,
    	"nickName": "Aduriz",
    	"number": 9,
    	"position": "forward",
    	"teamId": "2"
    }
];

  // when
  const players = await GetPlayers({playersRepository:mockPlayerRepository})(10,0,null);
  // then
  expect(players).toEqual([ {
        "id": 1,
        "nickName": "iniesta",
        "number": 6,
        "position": "midfield",
        "teamId": "3"
    },
    {
    	"id":2,
    	"nickName": "Aduriz",
    	"number": 9,
    	"position": "forward",
    	"teamId": "2"
    }]);
});