import { DepositSavings } from '@interfaces/transaction.interface';
import { GenericTransactionComponent } from '@popup/pages/app-container/home/wallet-history/wallet-history-item/wallet-transaction-info/wallet-transaction-types/generic-transaction/generic-transaction.component';
import { RootState } from '@popup/store';
import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import 'react-tabs/style/react-tabs.scss';
import FormatUtils from 'src/utils/format.utils';

interface DepositSavingsTransactionProps {
  transaction: DepositSavings;
}

const DepositSavingsTransaction = ({
  transaction,
  activeAccountName,
}: PropsFromRedux & DepositSavingsTransactionProps) => {
  const getDetail = () => {
    if (transaction.to !== activeAccountName) {
      return chrome.i18n.getMessage(
        'popup_html_wallet_info_deposit_savings_other_account',
        [
          transaction.from,
          FormatUtils.withCommas(transaction.amount, 3),
          transaction.to,
        ],
      );
    } else {
      return chrome.i18n.getMessage('popup_html_wallet_info_deposit_savings', [
        FormatUtils.withCommas(transaction.amount, 3),
      ]);
    }
  };

  return (
    <GenericTransactionComponent
      transaction={transaction}
      detail={getDetail()}></GenericTransactionComponent>
  );
};

const mapStateToProps = (state: RootState) => {
  return { activeAccountName: state.activeAccount.name };
};

const connector = connect(mapStateToProps, {});
type PropsFromRedux = ConnectedProps<typeof connector>;

export const DepositSavingsTransactionComponent = connector(
  DepositSavingsTransaction,
);
