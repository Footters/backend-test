const Player = require(process.cwd()+'/src/app/domain/entities/Player');
const PlayerRepository = require(process.cwd()+'/src/app/repositories/PlayerRepository');
const mockPlayerRepository = new PlayerRepository();
const CreatePlayer = require(process.cwd()+'/src/app/player/CreatePlayer');

test('should resolve with the newly persisted player (augmented with an ID)', async () => {
  // given
  const persistedPlayer = new Player(123, 'Oblak', 13, 'goalKeeper', null);
  mockPlayerRepository.create = jest.fn(() => persistedPlayer);

  // when
  const player = await CreatePlayer({playersRepository:mockPlayerRepository})('Oblak', 13, 'goalKeeper', null)

  // then
  expect(mockPlayerRepository.create).toHaveBeenCalledWith(new Player(null, 'Oblak', 13, 'goalKeeper', null));
  expect(player).toEqual(persistedPlayer);
});