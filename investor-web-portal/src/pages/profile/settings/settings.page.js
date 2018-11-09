import "./settings.scss";

import { GVButton } from "gv-react-components";
import TwoFactorAuthContainer from "modules/2fa/2fa-container";
import ProfileLayout from "pages/profile/profile-layout";
import { PASSWORD_ROUTE } from "pages/profile/profile.constants";
import React from "react";
import { translate } from "react-i18next";
import { Link } from "react-router-dom";

import LogoutButtonContainer from "./logout-button/logout-button-container";
import ProfileImageContainer from "./profile-image/profile-image-container";

const SettingsPage = ({ t }) => {
  return (
    <ProfileLayout route="settings">
      <div className="profile-settings__content">
        <TwoFactorAuthContainer />
        <ProfileImageContainer />
        <div className="profile-settings__aside-actions">
          <Link
            to={{
              pathname: PASSWORD_ROUTE,
              state: `/ ${t("profile.title")}`
            }}
          >
            <GVButton
              variant="text"
              color="secondary"
              className={"profile-settings__password"}
            >
              {`${t("profile.settings.change-password")} `}
              <span className="profile-settings__password-arrow">&#8250;</span>
            </GVButton>
          </Link>

          <LogoutButtonContainer />
        </div>
      </div>
    </ProfileLayout>
  );
};

export default translate()(SettingsPage);
