import * as globalPropertiesActions from 'src/popup/actions/global-properties.actions';
import HiveUtils from 'src/utils/hive.utils';
import Logger from 'src/utils/logger.utils';
import dynamic from 'src/__tests__/utils-for-testing/data/dynamic.hive';
import utilsT from 'src/__tests__/utils-for-testing/fake-data.utils';
import { getFakeStore } from 'src/__tests__/utils-for-testing/fake-store';
import { initialEmptyStateStore } from 'src/__tests__/utils-for-testing/initial-states';

afterEach(() => {
  jest.clearAllMocks();
});
describe('global-properties.actions tests:\n', () => {
  describe('loadGlobalProperties tests:\n', () => {
    test('Must load global props', async () => {
      HiveUtils.getDynamicGlobalProperties = jest
        .fn()
        .mockResolvedValue(dynamic.globalProperties);

      HiveUtils.getCurrentMedianHistoryPrice = jest
        .fn()
        .mockResolvedValue(dynamic.medianHistoryPrice);
      HiveUtils.getRewardFund = jest.fn().mockResolvedValue(dynamic.rewardFund);

      const fakeStore = getFakeStore(initialEmptyStateStore);
      await fakeStore.dispatch<any>(
        globalPropertiesActions.loadGlobalProperties(),
      );
      expect(fakeStore.getState().globalProperties).toEqual({
        globals: utilsT.dynamicPropertiesObj,
        price: utilsT.fakeCurrentMedianHistoryPrice,
        rewardFund: utilsT.fakePostRewardFundResponse,
      });
    });
    test('Must catch the error, call Logger.error', async () => {
      const promiseError = new Error('Custom Message');
      const spyLoggerError = jest.spyOn(Logger, 'error');
      HiveUtils.getDynamicGlobalProperties = jest
        .fn()
        .mockImplementation(() => Promise.reject(promiseError));
      const fakeStore = getFakeStore(initialEmptyStateStore);
      await fakeStore.dispatch<any>(
        globalPropertiesActions.loadGlobalProperties(),
      );
      expect(fakeStore.getState().globalProperties).toEqual({});
      expect(spyLoggerError).toBeCalledWith(promiseError);
      spyLoggerError.mockClear();
      spyLoggerError.mockReset();
    });
  });
});
