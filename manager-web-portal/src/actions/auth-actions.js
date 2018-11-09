import { HOME_ROUTE } from "pages/app/app.constants";

import authService from "../services/auth-service";
import history from "../utils/history";

export const UPDATE_TOKEN = "UPDATE_TOKEN";

const alreadyAuthenticated = () => {
  history.push(HOME_ROUTE);
};

const updateToken = () => ({
  type: UPDATE_TOKEN,
  isAuthenticated: authService.isAuthenticated(),
  userName: authService.getUserName()
});

const authActions = { updateToken, alreadyAuthenticated };
export default authActions;
