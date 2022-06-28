import App from '@popup/App';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import React from 'react';
import home from 'src/__tests__/popup/pages/app-container/home/mocks/home/home';
import alComponent from 'src/__tests__/utils-for-testing/aria-labels/al-component';
import alToolTip from 'src/__tests__/utils-for-testing/aria-labels/al-toolTip';
import accounts from 'src/__tests__/utils-for-testing/data/accounts';
import assertion from 'src/__tests__/utils-for-testing/preset/assertion';
import afterTests from 'src/__tests__/utils-for-testing/setups/afterTests';
import config from 'src/__tests__/utils-for-testing/setups/config';
import { userEventPendingTimers } from 'src/__tests__/utils-for-testing/setups/events';
config.useChrome();
jest.setTimeout(10000);

//const mk = fakeData.mk.userData1;
//const accounts = fakeData.accounts.twoAccounts;

// beforeEach(() => {
//   jest.useFakeTimers('legacy');
//   act(() => {
//     jest.advanceTimersByTime(4300);
//   });
//   mocks.mocksApp({
//     fixPopupOnMacOs: jest.fn(),
//     getValueFromLocalStorage: jest
//       .fn()
//       .mockImplementation(mocks.getValuefromLS),
//     getCurrentRpc: fakeData.rpc.fake,
//     activeAccountUsername: mk,
//     getRCMana: fakeData.manabar.manabarMin,
//     getAccounts: fakeData.accounts.extendedAccountFull,
//     rpcStatus: true,
//     setRpc: jest.fn(),
//     chromeSendMessage: jest.fn(),
//     hasStoredAccounts: true,
//     mkLocal: mk,
//     getAccountsFromLocalStorage: fakeData.accounts.twoAccounts,
//     hasVotedForProposal: true,
//     voteForKeychainProposal: jest.fn(),
//     chromeTabsCreate: jest.fn(),
//     i18nGetMessage: jest.fn().mockImplementation(mocks.i18nGetMessage),
//     saveValueInLocalStorage: jest.fn(),
//     clearLocalStorage: jest.fn(),
//     removeFromLocalStorage: jest.fn(),
//   });
//   mocks.mocksHome({
//     getPrices: fakeData.prices,
//     getAccountValue: '100000',
//   });
//   mocks.mocksTopBar({
//     hasReward: false,
//   });
//   mocks.mocksPowerUp({
//     getVestingDelegations: jest
//       .fn()
//       .mockResolvedValue(utilsT.fakeGetDelegateesResponse),
//   });
//   mocks.mocksDelegations({
//     getDelegators: jest.fn().mockResolvedValue({
//       data: utilsT.fakeGetDelegatorsResponse,
//     }),
//   });
//   mocks.mocksWalletHistory({
//     getAccountTransactions: jest
//       .fn()
//       .mockResolvedValue(utilsT.expectedDataGetAccountHistory),
//   });
//   mocks.mocksTokens({
//     getAllTokens: jest.fn().mockResolvedValue(utilsT.fakeTokensResponse),
//     getUserBalance: jest
//       .fn()
//       .mockResolvedValue(utilsT.fakeGetUserBalanceResponse),
//   });
// });
// afterEach(() => {
//   jest.runOnlyPendingTimers();
//   jest.useRealTimers();
//   cleanup();
// });
describe('home.component tests:\n', () => {
  beforeEach(async () => {
    await home.beforeEach(<App />, accounts.twoAccounts);
    await assertion.awaitFind(alComponent.homePage);
  });
  afterEach(() => {
    afterTests.clean();
  });
  it('Must show home page and user information', () => {
    home.userInformation();
  });
  it('Must show tool tip when hover on mana', async () => {
    //html_popup_voting_no_hp
    await userEventPendingTimers.hover(
      screen.getAllByLabelText(alToolTip.custom)[0],
    );
    expect(screen.getByText('yolo')).toBeInTheDocument();
  });
  it.todo('Must show tool tip when hover on credits');
  //   it('Must load the homepage and display active username', async () => {
  //     expect(screen.getByLabelText(al.component.homePage));
  //   });
  //   it('Must change active account to the selected one', async () => {
  //     const dropdownSelect = screen.getByLabelText(al.select.accountSelector);
  //     await act(async () => {
  //       await userEventPendingTimers.click(dropdownSelect);
  //     });
  //     const divAccount = screen.getByText(utilsT.userData2.username);
  //     await act(async () => {
  //       await userEventPendingTimers.click(divAccount);
  //     });
  //     expect(screen.getByLabelText(al.div.selectedAccount));
  //     const previousUserDiv = screen.queryByText(mk);
  //     expect(previousUserDiv).not.toBeInTheDocument();
  //     expect(screen.getByText(utilsT.userData2.username)).toBeDefined();
  //   });
  //   it('Must refresh data when click on logo', async () => {
  //     const imageRefresh = await screen.findByLabelText(al.icon.refreshHome);
  //     //reMocking
  //     HiveUtils.getClient().database.getAccounts = jest
  //       .fn()
  //       .mockResolvedValue(fakeData.accounts.extendedAccountMinVariant);
  //     HiveUtils.getClient().rc.getRCMana = jest
  //       .fn()
  //       .mockResolvedValue(fakeData.manabar.manabarMinVariant);
  //     const updatedAccountValue = '80000';
  //     mocks.mocksHome({
  //       getPrices: fakeData.prices,
  //       getAccountValue: updatedAccountValue,
  //     });
  //     //end reMocking
  //     await act(async () => {
  //       await userEventPendingTimers.click(imageRefresh);
  //       jest.advanceTimersByTime(4300);
  //     });
  //     expect(await screen.findByText('8,000.000')).toBeDefined();
  //     expect(
  //       await screen.findByText(`$ ${updatedAccountValue} USD`),
  //     ).toBeDefined();
  //   });
  //   it('Must log out user when clicking on log out', async () => {
  //     const selectedAccountDiv = await screen.findByLabelText(
  //       al.div.selectedAccount,
  //     );
  //     expect(selectedAccountDiv).toBeDefined();
  //     const logOutButton = screen.getByLabelText(al.button.logOut);
  //     await act(async () => {
  //       await userEventPendingTimers.click(logOutButton);
  //     });
  //     expect(screen.queryByLabelText(al.button.logOut)).not.toBeInTheDocument();
  //     expect(screen.getByLabelText(al.button.login)).toBeDefined();
  //   });
  //   it('Must show menu settings', async () => {
  //     const menuSettings = screen.getByLabelText(al.button.menu);
  //     await act(async () => {
  //       await userEventPendingTimers.click(menuSettings);
  //     });
  //     const settingsMenu = SettingsMenuItems;
  //     const menuItemsRendered = screen.getAllByLabelText(
  //       /menu-settings-button-/i,
  //     );
  //     expect(menuItemsRendered.length).toBe(settingsMenu.length);
  //     settingsMenu.forEach((item) => {
  //       expect(
  //         screen.queryByLabelText(`menu-settings-button-${item.icon}`),
  //       ).toBeInTheDocument();
  //     });
  //   });
  //   it.todo('Must show dropdown menu on HIVE balance');
  //   it.todo('Must show dropdown menu on HBD balance');
  //   it.todo('Must show dropdown menu on HP balance');

  //   //move to ./othercases dropdown-hive
  //   describe('dropdown arrow menu on hive tests:\n', () => {
  //     beforeEach(async () => {
  //       let dropDownMenu = screen.getByLabelText(
  //         al.dropdown.arrow.hive,
  //       ) as HTMLImageElement;
  //       await act(async () => {
  //         await userEventPendingTimers.click(dropDownMenu);
  //       });
  //     });
  //     it('Must open transfer funds page when clicking on send hive', async () => {
  //       let sendButton = screen.getByLabelText(al.dropdown.span.send);
  //       await act(async () => {
  //         await userEventPendingTimers.click(sendButton);
  //       });
  //       expect(
  //         screen.getByLabelText(al.component.transfersFundsPage),
  //       ).toBeDefined();
  //     });
  //     it('Must open power up page when clicking on power up', async () => {
  //       let powerUpButton = screen.getByLabelText(al.dropdown.span.powerUp);
  //       await act(async () => {
  //         await userEventPendingTimers.click(powerUpButton);
  //       });
  //       expect(screen.getByLabelText(al.component.powerUpDownPage)).toBeDefined();
  //     });
  //     it('Must load buy HIVE options when clicking on buy', async () => {
  //       let buyButton = screen.getByLabelText(al.dropdown.span.buy);
  //       await act(async () => {
  //         await userEventPendingTimers.click(buyButton);
  //       });
  //       expect(screen.getByLabelText(al.component.buyCoinsPage)).toBeDefined();
  //     });
  //     it('Must show convert page when clicking convert', async () => {
  //       let buyButton = screen.getByLabelText(al.dropdown.span.convert);
  //       await act(async () => {
  //         await userEventPendingTimers.click(buyButton);
  //       });
  //       expect(screen.getByLabelText(al.component.conversionPage)).toBeDefined();
  //     });
  //     it('Must show hive savings page when clicking on savings', async () => {
  //       let buyButton = screen.getByLabelText(al.dropdown.span.savings);
  //       await act(async () => {
  //         await userEventPendingTimers.click(buyButton);
  //       });
  //       expect(screen.getByLabelText(al.component.savingsPage)).toBeDefined();
  //     });
  //   });

  //   //move to ./othercases dropdown-hbd
  //   describe('dropdown arrow menu on hbd tests:\n', () => {
  //     beforeEach(async () => {
  //       let dropDownMenu = screen.getByLabelText(
  //         al.dropdown.arrow.hbd,
  //       ) as HTMLImageElement;
  //       await act(async () => {
  //         await userEventPendingTimers.click(dropDownMenu);
  //       });
  //     });
  //     it('Must open transfer funds page when clicking on send hbd', async () => {
  //       let sendButton = screen.getByLabelText(al.dropdown.span.send);
  //       await act(async () => {
  //         await userEventPendingTimers.click(sendButton);
  //       });
  //       expect(
  //         screen.getByLabelText(al.component.transfersFundsPage),
  //       ).toBeDefined();
  //     });
  //     it('Must load buy HBD options when clicking on buy', async () => {
  //       let buyButton = screen.getByLabelText(al.dropdown.span.buy);
  //       await act(async () => {
  //         await userEventPendingTimers.click(buyButton);
  //       });
  //       expect(screen.getByLabelText(al.component.buyCoinsPage)).toBeDefined();
  //     });
  //     it('Must show convert page when clicking convert', async () => {
  //       let buyButton = screen.getByLabelText(al.dropdown.span.convert);
  //       await act(async () => {
  //         await userEventPendingTimers.click(buyButton);
  //       });
  //       expect(screen.getByLabelText(al.component.conversionPage)).toBeDefined();
  //     });
  //     it('Must show hbd savings page when clicking savings', async () => {
  //       let buyButton = screen.getByLabelText(al.dropdown.span.savings);
  //       await act(async () => {
  //         await userEventPendingTimers.click(buyButton);
  //       });
  //       expect(screen.getByLabelText(al.component.savingsPage)).toBeDefined();
  //     });
  //   });

  //   //move to ./othercases dropdown-hp
  //   describe('dropdown arrow menu on hp tests:\n', () => {
  //     beforeEach(async () => {
  //       let dropDownMenu = screen.getByLabelText(
  //         al.dropdown.arrow.hp,
  //       ) as HTMLImageElement;
  //       await act(async () => {
  //         await userEventPendingTimers.click(dropDownMenu);
  //       });
  //     });
  //     it('Must show delegations page when clicking delegations', async () => {
  //       let delegationButton = screen.getByLabelText(
  //         al.dropdown.span.delegations,
  //       );
  //       await act(async () => {
  //         await userEventPendingTimers.click(delegationButton);
  //       });
  //       expect(screen.getByLabelText(al.component.delegationsPage)).toBeDefined();
  //     });
  //     it('Must show power down page when clicking power down', async () => {
  //       let powerDownButton = screen.getByLabelText(al.dropdown.span.powerDown);
  //       await act(async () => {
  //         await userEventPendingTimers.click(powerDownButton);
  //       });
  //       expect(screen.getByLabelText(al.component.powerUpDownPage)).toBeDefined();
  //     });
  //   });

  //   //move to ./othercases action-buttons
  //   describe('action buttons menu tests:\n', () => {
  //     it('Must open transfer funds page when clicking on send', async () => {
  //       let actionButtonSend = screen.getByLabelText(al.button.actionBtn.send);
  //       await act(async () => {
  //         await userEventPendingTimers.click(actionButtonSend);
  //       });
  //       expect(
  //         screen.getByLabelText(al.component.transfersFundsPage),
  //       ).toBeDefined();
  //     });
  //     it('Must show wallet history when clicking on history', async () => {
  //       let actionButtonHistory = screen.getByLabelText(
  //         al.button.actionBtn.history,
  //       );
  //       await act(async () => {
  //         await userEventPendingTimers.click(actionButtonHistory);
  //         jest.runAllTimers();
  //       });
  //       expect(
  //         await screen.findByLabelText(al.component.walletItemList),
  //       ).toBeDefined();
  //     });
  //     it('Must show tokens page when clicking on tokens', async () => {
  //       let actionButtonTokens = screen.getByLabelText(
  //         al.button.actionBtn.tokens,
  //       );
  //       await act(async () => {
  //         await userEventPendingTimers.click(actionButtonTokens);
  //         jest.runAllTimers();
  //       });
  //       expect(
  //         await screen.findByLabelText(al.component.userTokens),
  //       ).toBeDefined();
  //     });
  //     it('Must show governance page when clicking on governance', async () => {
  //       let actionButtonGovernance = screen.getByLabelText(
  //         al.button.actionBtn.governance,
  //       );
  //       KeychainApi.get = jest
  //         .fn()
  //         .mockResolvedValue(utilsT.fakeWitnessesRankingResponse);
  //       ProxyUtils.findUserProxy = jest.fn();
  //       WitnessUtils.unvoteWitness = jest.fn();
  //       BlockchainTransactionUtils.delayRefresh = jest.fn();
  //       await act(async () => {
  //         await userEventPendingTimers.click(actionButtonGovernance);
  //         jest.runAllTimers();
  //       });
  //       expect(
  //         await screen.findByLabelText(al.component.governancePage),
  //       ).toBeDefined();
  //     });
  //   });

  ////
});
