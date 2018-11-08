import "./forgot-password.scss";

import React from "react";
import { translate } from "react-i18next";

import ForgotPasswordContainer from "./components/forgot-password-container";

const ForgotPasswordPage = ({ t }) => {
  return (
    <div className="forgot-password">
      <p className="forgot-password__text">
        {t("auth.password-restore.forgot-password.text")}
      </p>
      <ForgotPasswordContainer />
    </div>
  );
};

export default translate()(ForgotPasswordPage);
