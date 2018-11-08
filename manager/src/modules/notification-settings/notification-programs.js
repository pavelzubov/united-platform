import NotificationEntity from "modules/notification-settings/notification-entity";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { translate } from "react-i18next";

import { PROGRAM_NOTIFICATIONS_ROUTE } from "../../pages/notifications/notifications.routes";
import replaceParams from "../../utils/replace-params";

export const composeProgramNotificationsUrl = url => {
  return replaceParams(PROGRAM_NOTIFICATIONS_ROUTE, {
    ":id": url
  });
};

class NotificationPrograms extends Component {
  render() {
    const { t, settings } = this.props;
    if (settings.length === 0) return null;
    const items = settings.map(setting => {
      const href = composeProgramNotificationsUrl(setting.url);
      return (
        <NotificationEntity
          href={href}
          level={setting.level}
          key={setting.programId}
          title={setting.title}
          logo={setting.logo}
          count={setting.settingsCustom.length + setting.settingsGeneral.length}
        />
      );
    });
    return (
      <div className="notification-settings">
        <h3>{t("notifications.programs")}</h3>
        <div className="program-notification__list">{items}</div>
      </div>
    );
  }
}

NotificationPrograms.propTypes = {
  settings: PropTypes.arrayOf(
    PropTypes.shape({
      level: PropTypes.number,
      logo: PropTypes.string,
      programId: PropTypes.string,
      settingsCustom: PropTypes.array,
      settingsGeneral: PropTypes.array
    })
  )
};

export default translate()(NotificationPrograms);
