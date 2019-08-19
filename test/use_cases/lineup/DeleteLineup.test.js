const LineupRepository = require(process.cwd()+'/src/app/repositories/LineupRepository');
const mockLineupRepository = new LineupRepository();
const DeleteLineup = require(process.cwd()+'/src/app/lineup/DeleteLineup');


test('should resolve (without result)', async () => {
  // given
  mockLineupRepository.delete = jest.fn(() => true);

  // when
  await DeleteLineup({lineupsRepository:mockLineupRepository})("local");

  // then
  expect(mockLineupRepository.delete).toHaveBeenCalledWith("local");
});