const Lineup = require(process.cwd()+'/src/app/domain/entities/Lineup');
const LineupRepository = require(process.cwd()+'/src/app/repositories/LineupRepository');
const mockLineupRepository = new LineupRepository();
const CreateLineup = require(process.cwd()+'/src/app/lineup/CreateLineup');


test('should resolve with the newly persisted action (augmented with an ID)', async () => {
  // given
  const persistedLineup = new Lineup(123, 'local', '4-4-2', 11);
  mockLineupRepository.create = jest.fn(() => persistedLineup);

  // when
  const lineup = await CreateLineup({lineupsRepository:mockLineupRepository})('local', '4-4-2', 11)

  // then
  expect(mockLineupRepository.create).toHaveBeenCalledWith(new Lineup(null, 'local', '4-4-2', 11));
  expect(lineup).toEqual(persistedLineup);
});