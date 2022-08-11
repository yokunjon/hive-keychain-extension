const useChrome = () => {
  const chrome = require('chrome-mock');
  global.chrome = chrome;
};

const byDefault = (jestTimeOut: number = 10000) => {
  // To check after finishing al suites. Need to remove?
  const chrome = require('chrome-mock');
  global.chrome = chrome;

  jest.setTimeout(jestTimeOut);

  //check if no errors by doing this
  afterAll(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });
};

export default { useChrome, byDefault };
