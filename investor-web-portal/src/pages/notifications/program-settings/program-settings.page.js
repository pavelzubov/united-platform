import Page from "components/page/page";
import ProgramNotificationsContainer from "modules/program-notifications/program-notifications-container";
import React from "react";
import { translate } from "react-i18next";

const ProgramNotificationPage = ({ t, match }) => {
  const { id } = match.params;
  return (
    <Page title={t("notifications.program.title")}>
      <h1>{t("notifications.program.title")}</h1>
      <ProgramNotificationsContainer id={id} />
    </Page>
  );
};

export default translate()(ProgramNotificationPage);
