import { RootState } from '@popup/store';
import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import ButtonComponent from 'src/common-ui/button/button.component';
import { PageTitleComponent } from 'src/common-ui/page-title/page-title.component';
import AccountUtils from 'src/utils/account.utils';

const ResetPasswordPage = ({}: PropsFromRedux) => {
  const reset = () => {
    AccountUtils.clearAllData();
  };

  return (
    <div className="reset-password-page">
      <PageTitleComponent title="popup_html_reset" isBackButtonEnabled={true} />

      <p
        className="introduction"
        dangerouslySetInnerHTML={{
          __html: chrome.i18n.getMessage('popup_html_reset_desc'),
        }}></p>

      <ButtonComponent label="popup_html_confirm" onClick={() => reset()} />
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {};
};

const connector = connect(mapStateToProps, {});
type PropsFromRedux = ConnectedProps<typeof connector>;

export const ResetPasswordPageComponent = connector(ResetPasswordPage);