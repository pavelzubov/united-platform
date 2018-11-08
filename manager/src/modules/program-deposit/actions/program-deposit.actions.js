import {
  FETCH_DEPOSIT_PROGRAM_INFO,
  FETCH_DEPOSIT_PROGRAM_INFO_CLEAR,
  INVEST_TO_PROGRAM_BY_ID,
  INVEST_TO_PROGRAM_BY_ID_CLEAR
} from "modules/program-deposit/program-deposit.constants";
import { managerApiProxy } from "services/api-client/manager-api";
import authService from "services/auth-service";

export const fetchDepositProgramInfoById = (id, currency) => {
  return {
    type: FETCH_DEPOSIT_PROGRAM_INFO,
    payload: managerApiProxy.v10ManagerProgramsByIdInvestInfoByCurrencyGet(
      id,
      currency,
      authService.getAuthArg()
    )
  };
};

export const clearDepositProgramInfo = () => {
  return {
    type: FETCH_DEPOSIT_PROGRAM_INFO_CLEAR
  };
};

export const investToProgramById = (id, amount) => {
  return {
    type: INVEST_TO_PROGRAM_BY_ID,
    payload: managerApiProxy.v10ManagerProgramsByIdInvestByAmountPost(
      id,
      amount,
      authService.getAuthArg()
    )
  };
};

export const clearInvestSubmit = () => {
  return {
    type: INVEST_TO_PROGRAM_BY_ID_CLEAR
  };
};
