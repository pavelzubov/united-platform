import Dialog from "components/dialog/dialog";
import { GVButton } from "gv-react-components";
import React from "react";
import { translate } from "react-i18next";

const CreateProgramNavigationDialog = ({ t, open, onClose, onConfirm }) => (
  <Dialog open={open} onClose={onClose}>
    <div className="create-program__navigation-dialog">
      <div className="create-program__navigation-dialog-text">
        {t("create-program-page.navigation-back-text")}
      </div>
      <GVButton
        className="create-program__navigation-dialog-button"
        onClick={onConfirm}
        children={t("buttons.continue")}
      />
    </div>
  </Dialog>
);

export default translate()(CreateProgramNavigationDialog);
