export const PROGRAMS_ROUTE = "/programs";

export const LEVEL_FILTER_NAME = "level";
export const AVG_PROFIT_FILTER_NAME = "profitAvgPercent";
export const TOTAL_PROFIT_FILTER_NAME = "profitTotal";
export const BALANCE_FILTER_NAME = "balanceUSD";
export const AVAILABLE_INVESTMENT_FILTER_NAME = "hasAvailableInvestment";
export const SORTING_FILTER_NAME = "sorting";

export const DEFAULT_AVG_PROFIT_MIN_FILTER_NAME = "programsMinAvgProfit";
export const DEFAULT_AVG_PROFIT_MAX_FILTER_NAME = "programsMaxAvgProfit";
export const DEFAULT_TOTAL_PROFIT_MIN_FILTER_NAME = "programsMinTotalProfit";
export const DEFAULT_TOTAL_PROFIT_MAX_FILTER_NAME = "programsMaxTotalProfit";

export const MAP_DEFAULT_FILTERS_FROM_SERVER = {
  [DEFAULT_AVG_PROFIT_MIN_FILTER_NAME]: {
    name: AVG_PROFIT_FILTER_NAME,
    variableName: "0"
  },
  [DEFAULT_AVG_PROFIT_MAX_FILTER_NAME]: {
    name: AVG_PROFIT_FILTER_NAME,
    variableName: "1"
  },
  [DEFAULT_TOTAL_PROFIT_MIN_FILTER_NAME]: {
    name: TOTAL_PROFIT_FILTER_NAME,
    variableName: "0"
  },
  [DEFAULT_TOTAL_PROFIT_MAX_FILTER_NAME]: {
    name: TOTAL_PROFIT_FILTER_NAME,
    variableName: "1"
  }
};

export const LEVEL_MIN_FILTER_VALUE = 1;
export const LEVEL_MAX_FILTER_VALUE = 7;
export const AVG_PROFIT_MIN_FILTER_VALUE = -10;
export const AVG_PROFIT_MAX_FILTER_VALUE = 100;
export const TOTAL_PROFIT_MIN_FILTER_VALUE = -1000;
export const TOTAL_PROFIT_MAX_FILTER_VALUE = 100000;
export const BALANCE_MIN_FILTER_VALUE = -1000;
export const BALANCE_MAX_FILTER_VALUE = 100000;
export const AVAILABLE_INVESTMENT_FILTER_VALUE = false;
export const SORTING_FILTER_VALUE = "ByLevelAsc";

export const SORTING_OPTIONS = [
  {
    value: "ByLevel",
    label: "Level"
  },
  // {
  //   value: "ByAvgProfit",
  //   label: "Avg. Profit"
  // },
  {
    value: "ByProfit",
    label: "Total Profit"
  },
  {
    value: "ByBalance",
    label: "Balance"
  }
];

export const PROGRAMS_DEFAULT_FILTERS = [
  {
    name: LEVEL_FILTER_NAME,
    value: [LEVEL_MIN_FILTER_VALUE, LEVEL_MAX_FILTER_VALUE]
  },
  {
    name: AVG_PROFIT_FILTER_NAME,
    value: [AVG_PROFIT_MIN_FILTER_VALUE, AVG_PROFIT_MAX_FILTER_VALUE]
  },
  {
    name: TOTAL_PROFIT_FILTER_NAME,
    value: [TOTAL_PROFIT_MIN_FILTER_VALUE, TOTAL_PROFIT_MAX_FILTER_VALUE]
  },
  {
    name: BALANCE_FILTER_NAME,
    value: [BALANCE_MIN_FILTER_VALUE, BALANCE_MAX_FILTER_VALUE]
  },
  {
    name: AVAILABLE_INVESTMENT_FILTER_NAME,
    value: AVAILABLE_INVESTMENT_FILTER_VALUE
  }
];
