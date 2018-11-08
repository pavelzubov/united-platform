import { NOT_FOUND_PAGE_ROUTE } from "pages/not-found/not-found.routes";
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { replace } from "react-router-redux";
import { bindActionCreators } from "redux";

import * as emailConfirmService from "../service/email-confirm.service";
import EmailConfirmFailure from "./email-confirm-failure";

class EmailConfirmContainer extends PureComponent {
  state = {
    isPending: true,
    errorMessage: "",
    code: null
  };

  componentDidMount() {
    const { queryParams, service, showNotFoundPage } = this.props;
    if (queryParams.userId && queryParams.code) {
      service
        .confirmEmail(queryParams.userId, queryParams.code)
        .catch(response => this.setState(response));
    } else {
      showNotFoundPage();
    }
  }

  render() {
    const { isPending, errorMessage } = this.state;
    if (isPending) return null;
    return <EmailConfirmFailure errorMessage={errorMessage} />;
  }
}

const mapDispatchToProps = dispatch => ({
  service: bindActionCreators(emailConfirmService, dispatch),
  showNotFoundPage: () => dispatch(replace(NOT_FOUND_PAGE_ROUTE))
});

export default connect(
  null,
  mapDispatchToProps
)(EmailConfirmContainer);
