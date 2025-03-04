import { RequestsHandler } from '@background/requests';
import sendErrors from '@background/requests/errors';
import * as dialogLifeCycle from 'src/background/requests/dialog-lifecycle';
import keychainRequest from 'src/__tests__/utils-for-testing/data/keychain-request';
import manipulateStrings from 'src/__tests__/utils-for-testing/helpers/manipulate-strings';

const request = keychainRequest.noValues.decode;
const tab = 0;
const requestHandler = new RequestsHandler();

const spies = {
  createPopup: jest.spyOn(dialogLifeCycle, 'createPopup'),
};

const callback = {
  sendErrors: async () => {
    sendErrors(
      requestHandler,
      tab,
      'no_wallet',
      await chrome.i18n.getMessage('bgd_init_no_wallet'),
      await chrome.i18n.getMessage('bgd_init_no_wallet_explained'),
      request,
    );
  },
};

const methods = {
  afterEach: afterEach(() => {
    jest.clearAllMocks();
  }),
  clean: (str: string) => manipulateStrings.removeTabs(str),
};

const constants = {
  request,
  tab,
  requestHandler,
};

export default {
  methods,
  constants,
  spies,
  callback,
};
