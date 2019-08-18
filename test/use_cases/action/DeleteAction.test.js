const ActionRepository = require(process.cwd()+'/src/app/repositories/ActionRepository');
const mockActionRepository = new ActionRepository();
const DeleteAction = require(process.cwd()+'/src/app/action/DeleteAction');


test('should resolve (without result)', async () => {
  // given
  mockActionRepository.delete = jest.fn(() => true);

  // when
  await DeleteAction({actionsRepository:mockActionRepository})(1);

  // then
  expect(mockActionRepository.delete).toHaveBeenCalledWith(1);
});