import { hsc } from '@api/hiveEngine';
import KeychainApi from '@api/keychain';
import AccountUtils from 'src/utils/account.utils';
import ActiveAccountUtils from 'src/utils/active-account.utils';
import CurrencyPricesUtils from 'src/utils/currency-prices.utils';
import HiveEngineUtils from 'src/utils/hive-engine.utils';
import HiveUtils from 'src/utils/hive.utils';
import LocalStorageUtils from 'src/utils/localStorage.utils';
import MkUtils from 'src/utils/mk.utils';
import ProposalUtils from 'src/utils/proposal.utils';
import ProxyUtils from 'src/utils/proxy.utils';
import RpcUtils from 'src/utils/rpc.utils';
import TransactionUtils from 'src/utils/transaction.utils';

export const toOverWriteFuntions: any = {
  getValueFromLocalStorage: () =>
    (LocalStorageUtils.getValueFromLocalStorage = jest.fn()),
  getCurrentRpc: () => (RpcUtils.getCurrentRpc = jest.fn()),
  getActiveAccountNameFromLocalStorage: () =>
    (ActiveAccountUtils.getActiveAccountNameFromLocalStorage = jest.fn()),
  getRCMana: () => (HiveUtils.getClient().rc.getRCMana = jest.fn()),
  getAccounts: () => (HiveUtils.getClient().database.getAccounts = jest.fn()),
  checkRpcStatus: () => (RpcUtils.checkRpcStatus = jest.fn()),
  setRpc: () => (HiveUtils.setRpc = jest.fn()),
  hasStoredAccounts: () => (AccountUtils.hasStoredAccounts = jest.fn()),
  getMkFromLocalStorage: () => (MkUtils.getMkFromLocalStorage = jest.fn()),
  getAccountsFromLocalStorage: () =>
    (AccountUtils.getAccountsFromLocalStorage = jest.fn()),
  findUserProxy: () => (ProxyUtils.findUserProxy = jest.fn()),
  getPrices: () => (CurrencyPricesUtils.getPrices = jest.fn()),
  getAccountValue: () => (AccountUtils.getAccountValue = jest.fn()),
  hasReward: () => (ActiveAccountUtils.hasReward = jest.fn()),
  getVestingDelegations: () =>
    (HiveUtils.getClient().database.getVestingDelegations = jest.fn()),
  getDelegators: () => (KeychainApi.get = jest.fn()),
  getAccountTransactions: () =>
    (TransactionUtils.getAccountTransactions = jest.fn()),
  getTokens: () => (hsc.find = jest.fn()),
  getUserBalance: () => (HiveEngineUtils.getUserBalance = jest.fn()),
  hasVotedForProposal: () => (ProposalUtils.hasVotedForProposal = jest.fn()),
  voteForKeychainProposal: () =>
    (ProposalUtils.voteForKeychainProposal = jest.fn()),
};