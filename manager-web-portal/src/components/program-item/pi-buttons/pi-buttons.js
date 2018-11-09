import "./pi-buttons.css";

import React from "react";
import { Link } from "react-router-dom";

import { PROGRAM_ROUTE } from "../../../modules/program/program.constants";
import replaceParams from "../../../utils/replace-params";
import Button from "../../button/button";

const PIButtons = ({
  isAuthenticated,
  programId,
  isInvestEnable,
  openInvestPopup
}) => {
  const traderRoute = replaceParams(PROGRAM_ROUTE, {
    ":programId": programId
  });
  return (
    <div className="pi-buttons">
      <Link to={traderRoute}>
        <Button disabled primary className="pi-button" label="View Profile" />
      </Link>
      <Button
        primary
        className="pi-button"
        label="Invest"
        onClick={openInvestPopup(programId)}
      />
    </div>
  );
};

export default PIButtons;
