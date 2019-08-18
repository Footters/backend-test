const Action = require(process.cwd()+'/src/app/domain/entities/Action');
const ActionRepository = require(process.cwd()+'/src/app/repositories/ActionRepository');
const mockActionRepository = new ActionRepository();
const CreateAction = require(process.cwd()+'/src/app/action/CreateAction');

test('should resolve with the newly persisted action (augmented with an ID)', async () => {
  // given
  const persistedAction = new Action(123, 'gol', 25, 2);
  mockActionRepository.create = jest.fn(() => persistedAction);

  // when
  const action = await CreateAction({actionsRepository:mockActionRepository})('gol', 25, 2)

  // then
  expect(mockActionRepository.create).toHaveBeenCalledWith(new Action(null, 'gol', 25, 2));
  expect(action).toEqual(persistedAction);
});