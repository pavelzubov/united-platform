import { GVButton } from "gv-react-components";
import { LOGIN_ROUTE } from "pages/auth/login/login.routes";
import React, { Fragment } from "react";
import { translate } from "react-i18next";
import { Link } from "react-router-dom";

const signUpFooter = ({ t }) => (
  <Fragment>
    <span className="signup-footer__desc">{t("auth.signup.footer-text")}</span>
    <Link to={LOGIN_ROUTE}>
      <GVButton variant="outlined" color="secondary">
        {t("auth.login.title")}
      </GVButton>
    </Link>
  </Fragment>
);

export default translate()(signUpFooter);
