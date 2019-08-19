const LineupRepository = require(process.cwd()+'/src/app/repositories/LineupRepository');
const mockLineupRepository = new LineupRepository();
const GetLineups = require(process.cwd()+'/src/app/lineup/GetLineups');

test('should resolve with all the lineups persisted in repository', async () => {
  // given
  mockLineupRepository.find = () => [
      {
          "id": 3,
          "name": "local",
          "lineup": "4-4-2"
      }
  ];

  // when
  const lineups = await GetLineups({lineupsRepository:mockLineupRepository})();
  // then
  expect(lineups).toEqual([
        {
          "id": 3,
          "name": "local",
          "lineup": "4-4-2"
      }
    ]);
});