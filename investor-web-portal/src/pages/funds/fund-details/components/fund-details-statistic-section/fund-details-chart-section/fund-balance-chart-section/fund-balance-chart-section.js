import ChartPeriod from "components/chart/chart-period/chart-period";
import StatisticItem from "components/statistic-item/statistic-item";
import React, { Fragment } from "react";

import FundBalanceChart from "./fund-balance-chart";

const ProgramBalanceChartSection = ({
  balanceChartData,
  period,
  onPeriodChange,
  currency
}) => {
  const { data: balanceChart } = balanceChartData;
  if (!balanceChart) return null;
  return (
    <Fragment>
      <div>
        <StatisticItem
          heading={"Value"}
          value={balanceChart.gvtBalance}
          equivalent={balanceChart.programCurrencyBalance}
          currency={balanceChart.programCurrency}
          className="fund-details-chart__stat-item"
        />
        {/* <StatisticItem
          heading={"Change"}
          value={changeValue}
          equivalent={"???"}
          currency={"???"}
          className="fund-details-chart__stat-item"
        /> */}
      </div>
      <ChartPeriod onChange={onPeriodChange} period={period} />
      <div className="fund-details-chart__profit">
        <FundBalanceChart
          balanceChart={balanceChart.balanceChart}
          currency={"BTC"}
        />
      </div>
    </Fragment>
  );
};

export default ProgramBalanceChartSection;
