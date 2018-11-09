import "./dashboard-in-requests.scss";

import { ActionsCircleIcon } from "components/icon/actions-circle-icon";
import Popover from "components/popover/popover";
import StatisticItem from "components/statistic-item/statistic-item";
import React, { PureComponent } from "react";
import Scrollbars from "react-custom-scrollbars";
import { translate } from "react-i18next";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";

import {
  cancelRequest,
  getInRequests
} from "../../../services/dashboard-in-requests.service";
import DashboardRequest from "./dashboard-request";

class DashboardInRequestsContainer extends PureComponent {
  state = {
    anchor: null
  };

  componentDidMount() {
    const { service } = this.props;
    service.getInRequests();
  }

  handleOpenDropdown = event => this.setState({ anchor: event.currentTarget });
  handleCloseDropdown = () => this.setState({ anchor: null });

  renderActionsIcon = () => {
    if (this.props.inRequests.requests.length === 0) return null;
    return (
      <ActionsCircleIcon
        className="dashboard-request__icon"
        primary={this.state.anchor !== null}
        onClick={this.handleOpenDropdown}
      />
    );
  };

  render() {
    const { inRequests, isPending, service } = this.props;
    if (!inRequests || isPending) return null;

    return (
      <div className="dashboard-request">
        <StatisticItem
          heading={"In Requests"}
          value={inRequests.totalValue}
          adornment={this.renderActionsIcon()}
        />

        <Popover
          horizontal="right"
          vertical="bottom"
          anchorEl={this.state.anchor}
          noPadding
          onClose={this.handleCloseDropdown}
        >
          <Scrollbars autoHeight>
            <div className="dashboard-request-popover">
              {inRequests.requests.map(x => (
                <DashboardRequest
                  key={x.id}
                  request={x}
                  cancelRequest={service.cancelRequest}
                  onApplyCancelRequest={this.handleCloseDropdown}
                />
              ))}
            </div>
          </Scrollbars>
        </Popover>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { data, isPending } = state.dashboard.inRequestsData;
  return { inRequests: data, isPending };
};

const mapDispatchToProps = dispatch => {
  return {
    service: bindActionCreators({ getInRequests, cancelRequest }, dispatch)
  };
};

export default compose(
  translate(),
  connect(mapStateToProps, mapDispatchToProps)
)(DashboardInRequestsContainer);
