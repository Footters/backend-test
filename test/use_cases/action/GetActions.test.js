const ActionRepository = require(process.cwd()+'/src/app/repositories/ActionRepository');
const mockActionRepository = new ActionRepository();
const GetActions = require(process.cwd()+'/src/app/action/GetActions');

test('should resolve with all the actions persisted in repository', async () => {
  // given
  mockActionRepository.find = () => [
        {
            "id": 1,
            "type": "gol",
            "minute": 37,
            "player": "1"
        }
    ];

  // when
  const actions = await GetActions({actionsRepository:mockActionRepository})(10,0,1);
  // then
  expect(actions).toEqual([
        {
            "id": 1,
            "type": "gol",
            "minute": 37,
            "player": "1"
        }
    ]);
});