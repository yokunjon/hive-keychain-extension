import {
  RequestId,
  RequestRecurrentTransfer,
} from '@interfaces/keychain.interface';
import { Rpc } from '@interfaces/rpc.interface';
import React from 'react';
import Operation from 'src/dialog/components/operation/operation';
import RequestItem from 'src/dialog/components/request-item/request-item';
import { useAnonymousRequest } from 'src/dialog/hooks/anonymous-requests';
import CurrencyUtils from 'src/utils/currency.utils';

type Props = {
  data: RequestRecurrentTransfer & RequestId;
  domain: string;
  tab: number;
  rpc: Rpc;
  accounts?: string[];
};

const RecurrentTransfer = (props: Props) => {
  const { data, accounts, rpc } = props;
  const { memo } = data;
  const anonymousProps = useAnonymousRequest(data, accounts);
  let memoField = memo;
  if (memo.length) {
    if (memo.startsWith('#')) {
      memoField = `${memo} (${chrome.i18n.getMessage('popup_encrypted')})`;
    }
  } else {
    memoField = chrome.i18n.getMessage('popup_empty');
  }
  const renderUsername = () => {
    return !accounts ? (
      <RequestItem title={'dialog_account'} content={`@${data.username}`} />
    ) : (
      <></>
    );
  };

  const getRecurrence = () => {
    const days = Math.floor(data.recurrence / 24);
    const hours = data.recurrence % 24;
    let recurrenceString;
    if (!days) {
      recurrenceString = chrome.i18n.getMessage('dialog_recurrence_hours', [
        hours + '',
      ]);
    } else {
      if (!hours) {
        recurrenceString = chrome.i18n.getMessage('dialog_recurrence_days', [
          days + '',
        ]);
      } else {
        recurrenceString = chrome.i18n.getMessage(
          'dialog_recurrence_days_hours',
          [days + '', hours + ''],
        );
      }
    }
    return recurrenceString;
  };
  return (
    <Operation
      title={chrome.i18n.getMessage('dialog_title_recurrent_transfer')}
      {...anonymousProps}
      {...props}>
      {renderUsername()}
      <RequestItem title="dialog_to" content={`@${data.to}`} />
      <RequestItem
        title="dialog_amount"
        content={`${data.amount} ${CurrencyUtils.getCurrencyLabel(
          data.currency,
          rpc.testnet,
        )}`}
      />

      {data.memo && data.memo.length ? (
        <RequestItem title="dialog_memo" content={`${memoField}`} />
      ) : (
        <></>
      )}
      <RequestItem title="dialog_recurrence" content={getRecurrence()} />
      <RequestItem
        title="dialog_executions"
        content={chrome.i18n.getMessage('dialog_executions_times', [
          data.executions + '',
        ])}
      />
    </Operation>
  );
};

export default RecurrentTransfer;
