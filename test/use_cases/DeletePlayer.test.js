const PlayerRepository = require(process.cwd()+'/src/app/repositories/PlayerRepository');
const mockPlayerRepository = new PlayerRepository();
const DeletePlayer = require(process.cwd()+'/src/app/player/DeletePlayer');


test('should resolve (without result)', async () => {
  // given
  mockPlayerRepository.delete = jest.fn(() => true);

  // when
  await DeletePlayer({playersRepository:mockPlayerRepository})('Aduriz');

  // then
  expect(mockPlayerRepository.delete).toHaveBeenCalledWith('Aduriz');
});