import "./auth-layout.scss";

import GvBrand from "components/gv-brand/gv-brand";
import GvLogo from "components/gv-logo/gv-logo";
import { HOME_ROUTE } from "pages/app/app.constants";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { translate } from "react-i18next";
import { NavLink } from "react-router-dom";

const QUOTES_COUNT = 5;

class AuthLayout extends Component {
  state = {
    quoteNo: 0
  };

  constructor(props) {
    super(props);

    this.state = {
      quoteNo: Math.floor(Math.random() * QUOTES_COUNT + 1)
    };
  }

  render() {
    const { t, children, title, Footer } = this.props;
    const { quoteNo } = this.state;

    return (
      <div className={"auth page"}>
        <div className="auth__left">
          <NavLink
            className="navigation__link auth__logo"
            activeClassName="navigation__link--active"
            to={HOME_ROUTE}
          >
            <GvLogo />
            <GvBrand />
          </NavLink>
          <blockquote className="auth__quote">
            {t(`auth.quotes.${quoteNo}.quote`)}
            <footer className="auth__quote-footer">
              —{" "}
              <cite className="auth__quote-author">
                {t(`auth.quotes.${quoteNo}.author`)}
              </cite>
            </footer>
          </blockquote>
        </div>
        <div className="auth__right">
          <div className="auth__content">
            {title && <h1 className="auth__title">{title}</h1>}
            {children}
          </div>
          {Footer && (
            <div className="auth__footer">
              <Footer />
            </div>
          )}
        </div>
      </div>
    );
  }
}

AuthLayout.propTypes = {
  Footer: PropTypes.func,
  title: PropTypes.string
};

export default translate()(AuthLayout);
