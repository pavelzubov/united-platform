import "./disable-auth.scss";

import DisableAuthForm from "modules/2fa/disable-auth/disable-auth-form";
import DisableAuthSuccess from "modules/2fa/disable-auth/disable-auth-success";
import React, { Component } from "react";
import { authApiProxy } from "services/api-client/auth-api";
import authService from "services/auth-service";

class DisableAuthContainer extends Component {
  state = {
    isPending: false,
    success: false,
    errorMessage: ""
  };
  handleSubmit = model => {
    this.setState({ isPending: true });
    authApiProxy
      .v10Auth2faDisablePost(authService.getAuthArg(), {
        model
      })
      .then(data => {
        this.setState({ ...data, success: true }, this.props.onSubmit);
      })
      .catch(data => {
        this.setState({ ...data, success: false });
      });
  };
  render() {
    const { success, isPending, errorMessage } = this.state;
    return success ? (
      <DisableAuthSuccess />
    ) : (
      <DisableAuthForm
        onSubmit={this.handleSubmit}
        disabled={isPending}
        errorMessage={errorMessage}
      />
    );
  }
}

DisableAuthContainer.propTypes = {};

export default DisableAuthContainer;
