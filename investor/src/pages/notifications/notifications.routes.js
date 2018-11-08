import FundNotificationPage from "pages/notifications/fund-settings/fund-settings.page";
import NotificationsPage from "pages/notifications/general-settings/general-settings.page";
import ProgramNotificationPage from "pages/notifications/program-settings/program-settings.page";
import React from "react";
import { Route, Switch } from "react-router-dom";

export const NOTIFICATIONS_ROUTE = "/notifications";
export const PROGRAM_NOTIFICATIONS_ROUTE = `${NOTIFICATIONS_ROUTE}/program/:id`;
export const FUND_NOTIFICATIONS_ROUTE = `${NOTIFICATIONS_ROUTE}/fund/:id`;
export const MANAGER_NOTIFICATIONS_ROUTE = `${NOTIFICATIONS_ROUTE}/manager/:id`;

const NotificationRoutes = () => (
  <Switch>
    <Route
      path={PROGRAM_NOTIFICATIONS_ROUTE}
      component={ProgramNotificationPage}
    />
    <Route path={FUND_NOTIFICATIONS_ROUTE} component={FundNotificationPage} />
    <Route path={NOTIFICATIONS_ROUTE} component={NotificationsPage} />
  </Switch>
);

export default NotificationRoutes;
