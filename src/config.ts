import { HiveEngineConfig } from '@interfaces/hive-engine-rpc.interface';
const Config = {
  hiveEngine: {
    mainnet: 'ssc-mainnet-hive',
    accountHistoryApi: 'https://history.hive-engine.com/',
    rpc: 'https://api.hive-engine.com/rpc',
  } as HiveEngineConfig,
  claims: {
    FREQUENCY: +(process.env.DEV_CLAIM_FREQUENCY || 10),
    freeAccount: {
      MIN_RC_PCT: +(process.env.DEV_CLAIM_ACCOUNT_RC_PCT || 85),
      MIN_RC: +(process.env.DEV_CLAIM_ACCOUNT_MIN_RC || 1.2 * 10 * 10 ** 12), // 20% more than 10^13 (current creation cost)
    },
    savings: {
      delay: +(process.env.DEV_CLAIM_SAVINGS_DELAY || 30),
    },
  },
  analytics: {
    frequency: +(process.env.DEV_ANALYTICS_FREQUENCY || 10),
  },
  PROPOSAL: 216,
  PROPOSAL_MIN_VOTE_DIFFERENCE_HIDE_POPUP: 8 * 10 ** 6,
  MIN_LOADING_TIME: 1000,
  rpc: {
    DEFAULT: { uri: 'https://api.hive.blog', testnet: false },
  },
  governanceReminderDelayInSeconds: 30 * 24 * 3600, //days
  transak: {
    apiKey:
      process.env.TRANSAK_DEV_API_KEY || '716078e4-939c-445a-8c6d-534614cd31b1',
  },
  loader: {
    minDuration: process.env.NODE_ENV === 'test' ? 0 : 1000,
  },
};

export default Config;
