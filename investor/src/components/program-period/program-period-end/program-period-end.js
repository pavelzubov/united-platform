import Tooltip from "components/tooltip/tooltip";
import React from "react";
import { translate } from "react-i18next";

import PeriodTimeLeft from "../period-time-left";
import PropgramPeriodEndTooltip from "./program-period-end-tooltip";

const ProgramPeriodEnd = ({ t, periodEnds }) => {
  return (
    <Tooltip
      render={() => <PropgramPeriodEndTooltip periodEnds={periodEnds} />}
    >
      <div>
        <PeriodTimeLeft periodEnds={periodEnds} />
      </div>
    </Tooltip>
  );
};

export default translate()(ProgramPeriodEnd);
