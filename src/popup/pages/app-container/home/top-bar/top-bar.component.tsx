import { refreshActiveAccount } from '@popup/actions/active-account.actions';
import { forgetMk } from '@popup/actions/mk.actions';
import { navigateTo, resetNav } from '@popup/actions/navigation.actions';
import { RootState } from '@popup/store';
import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Screen } from 'src/reference-data/screen.enum';
import ActiveAccountUtils from 'src/utils/active-account.utils';
import FormatUtils from 'src/utils/format.utils';
import HiveUtils from 'src/utils/hive.utils';
import './top-bar.component.scss';

const TopBar = ({
  forgetMk,
  navigateTo,
  resetNav,
  refreshActiveAccount,
  activeAccount,
  globalProperties,
}: PropsFromRedux) => {
  const [hasRewardToClaim, setHasRewardToClaim] = useState(false);

  useEffect(() => {
    if (!ActiveAccountUtils.isEmpty(activeAccount)) {
      setHasRewardToClaim(
        ActiveAccountUtils.hasReward(
          activeAccount.account.reward_hbd_balance as string,
          FormatUtils.toHP(
            activeAccount.account.reward_vesting_balance
              .toString()
              .replace('VESTS', ''),
            globalProperties.globals,
          ).toString(),
          activeAccount.account.reward_hive_balance as string,
        ),
      );
    }
  }, [activeAccount]);

  const lockPopup = (): void => {
    resetNav();
    forgetMk();
  };

  const claim = async (): Promise<void> => {
    const claimSuccessful = await HiveUtils.claimRewards(
      activeAccount,
      activeAccount.account.reward_hive_balance,
      activeAccount.account.reward_hbd_balance,
      activeAccount.account.reward_vesting_balance,
    );
    if (claimSuccessful) {
      setHasRewardToClaim(false);
      refreshActiveAccount();
    }
  };

  return (
    <div className="top-bar">
      <img src="/assets/images/keychain_icon_small.png" />
      <div className="spacer"></div>
      {hasRewardToClaim && (
        <img
          className="button claim-button"
          src="/assets/images/claim.png"
          onClick={() => claim()}
        />
      )}
      <img
        className="button lock-button"
        src="/assets/images/lock_wallet.png"
        onClick={() => lockPopup()}
      />
      <img
        className="button settings-button"
        src="/assets/images/squares.png"
        onClick={() => navigateTo(Screen.SETTINGS_MAIN_PAGE)}
      />
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    activeAccount: state.activeAccount,
    globalProperties: state.globalProperties,
  };
};

const connector = connect(mapStateToProps, {
  forgetMk,
  navigateTo,
  resetNav,
  refreshActiveAccount,
});
type PropsFromRedux = ConnectedProps<typeof connector>;

export const TopBarComponent = connector(TopBar);