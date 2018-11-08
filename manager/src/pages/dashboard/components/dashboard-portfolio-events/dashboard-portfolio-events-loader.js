import "./dashboard-portfolio-events.scss";

import { GVButton } from "gv-react-components";
import React, { Fragment } from "react";
import { translate } from "react-i18next";
import { Link } from "react-router-dom";

import { DASHBOARD_EVENTS_ROUTE } from "../../dashboard.routes";
import DashboardPortfolioEventLoader from "./dashboard-portfolio-event/dashboard-portfolio-event-loader";

const DashboardPortfolioEvents = ({ t }) => (
  <Fragment>
    <div className="dashboard-portfolio-events__scroll-container">
      <div className="dashboard-portfolio-events__list">
        <DashboardPortfolioEventLoader />
        <DashboardPortfolioEventLoader />
      </div>
    </div>

    <Link
      to={DASHBOARD_EVENTS_ROUTE}
      className="dashboard-portfolio-events__see-all"
    >
      <GVButton variant="text" color="secondary">
        {t("dashboard.portfolio-events.see-all-button")} &#8250;
      </GVButton>
    </Link>
  </Fragment>
);

const DashboardPortfolioEventsLoader = translate()(DashboardPortfolioEvents);

export default DashboardPortfolioEventsLoader;
