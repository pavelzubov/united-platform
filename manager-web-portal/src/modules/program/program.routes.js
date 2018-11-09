import { Route } from "react-router-dom";
import React from "react";

import ProgramContainer from "./components/program-container/program-container";

import { PROGRAM_ROUTE } from "./program.constants";

const ProgramRoutes = () => (
  <Route exact path={PROGRAM_ROUTE} component={ProgramContainer} />
);

export default ProgramRoutes;
