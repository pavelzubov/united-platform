import moment from "moment";

export const ChartPeriodType = {
  day: "day",
  week: "week",
  month: "month",
  quarter: "quarter",
  year: "year",
  all: "all"
};

export const getPeriodStartDate = periodType => {
  switch (periodType) {
    case ChartPeriodType.all:
      return undefined;
    default:
      return moment()
        .subtract(1, `${periodType}s`)
        .toDate();
  }
};

export const DEFAULT_PERIOD = {
  type: ChartPeriodType.week,
  start: getPeriodStartDate(ChartPeriodType.week),
  end: moment().toDate()
};
