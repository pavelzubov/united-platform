import ProgramWithdrawForm from "modules/program-withdraw/components/program-withdraw-form";
import PropTypes from "prop-types";
import React, { Component, Fragment } from "react";

import ProgramWithdrawTop from "./program-withdraw-top";

class ProgramWithdrawPopup extends Component {
  state = {
    data: undefined,
    isPending: false,
    errorMessage: null
  };

  componentDidMount() {
    this.setState({ isPending: true });
    this.props
      .fetchInfo()
      .then(data => {
        this.setState({ ...data });
      })
      .catch(data => this.setState({ ...data }));
  }

  handleSumbit = amount => {
    this.setState({ isPending: true });
    return this.props
      .withdraw(amount)
      .then(data => this.setState({ ...data }))
      .catch(data => this.setState({ ...data }));
  };

  render() {
    if (!this.state.data) return null;
    const { programCurrency, accountCurrency, error } = this.props;
    const { title, availableToWithdraw, periodEnds, rate } = this.state.data;
    return (
      <Fragment>
        <ProgramWithdrawTop
          title={title}
          availableToWithdraw={availableToWithdraw}
          programCurrency={programCurrency}
        />
        <ProgramWithdrawForm
          programCurrency={programCurrency}
          accountCurrency={accountCurrency}
          availableToWithdraw={availableToWithdraw}
          periodEnds={periodEnds}
          rate={rate}
          onSubmit={this.handleSumbit}
          errorMessage={error}
          disabled={this.state.isPending}
        />
      </Fragment>
    );
  }
}

ProgramWithdrawPopup.propTypes = {
  fetchInfo: PropTypes.func,
  withdraw: PropTypes.func,
  accountCurrency: PropTypes.string.isRequired,
  programCurrency: PropTypes.string.isRequired
};

export default ProgramWithdrawPopup;
