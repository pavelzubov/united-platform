import "./dashboard-funds.scss";

import AssetAvatar from "components/avatar/asset-avatar/asset-avatar";
import FundAssetContainer from "components/fund-asset/fund-asset-container";
import Profitability from "components/profitability/profitability";
import ProgramSimpleChart from "components/program-simple-chart/program-simple-chart";
import { GVButton } from "gv-react-components";
import { TableCell, TableRow } from "modules/table/components";
import DateRangeFilter from "modules/table/components/filtering/date-range-filter/date-range-filter";
import { DEFAULT_DATE_RANGE_FILTER_VALUE } from "modules/table/components/filtering/date-range-filter/date-range-filter.constants";
import { DATE_RANGE_FILTER_NAME } from "modules/table/components/filtering/date-range-filter/date-range-filter.constants";
import TableModule from "modules/table/components/table-module";
import { DEFAULT_PAGING } from "modules/table/reducers/table-paging.reducer";
import React, { Component, Fragment } from "react";
import { translate } from "react-i18next";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";

import { formatValue } from "../../../../../utils/formatter";
import { composeFundsDetailsUrl } from "../../../../funds/funds.routes";
import {
  DASHBOARD_FUNDS_FILTERS,
  DASHBOARD_FUNDS_TABLE_COLUMNS
} from "../../../dashboard.constants";
import { getDashboardFunds } from "../../../services/dashboard-funds.service";

class DashboardFunds extends Component {
  fetchFunds = filters => {
    return getDashboardFunds(filters).then(({ data }) => {
      return { items: data.funds, total: data.total };
    });
  };

  render() {
    const { t, title } = this.props;
    return (
      <TableModule
        paging={DEFAULT_PAGING}
        filtering={{
          dateRange: DEFAULT_DATE_RANGE_FILTER_VALUE
        }}
        defaultFilters={DASHBOARD_FUNDS_FILTERS}
        getItems={this.fetchFunds}
        columns={DASHBOARD_FUNDS_TABLE_COLUMNS}
        renderFilters={(updateFilter, filtering) => (
          <Fragment>
            <DateRangeFilter
              name={DATE_RANGE_FILTER_NAME}
              value={filtering[DATE_RANGE_FILTER_NAME]}
              onChange={updateFilter}
              startLabel={t("filters.date-range.fund-start")}
            />
          </Fragment>
        )}
        renderHeader={column => (
          <span
            className={`funds-table__cell dashboard-funds__cell--${
              column.name
            }`}
          >
            {t(`dashboard-page.funds-header.${column.name}`)}
          </span>
        )}
        renderBodyRow={fund => (
          <TableRow>
            <TableCell className="funds-table__cell funds-table__cell--name">
              <div className="funds-table__cell--avatar-title">
                <Link
                  to={{
                    pathname: composeFundsDetailsUrl(fund.url),
                    state: `/ ${title}`
                  }}
                >
                  <AssetAvatar
                    url={fund.logo}
                    alt={fund.title}
                    color={fund.color}
                  />
                </Link>
                <div className="funds-table__cell--title">
                  <Link
                    to={{
                      pathname: composeFundsDetailsUrl(fund.url),
                      state: `/ ${title}`
                    }}
                  >
                    <GVButton variant="text" color="secondary">
                      {fund.title}
                    </GVButton>
                  </Link>
                </div>
              </div>
            </TableCell>
            <TableCell className="funds-table__cell funds-table__cell--amount">
              {formatValue(fund.statistic.balanceGVT.amount)} GVT
            </TableCell>
            <TableCell className="funds-table__cell">
              <FundAssetContainer
                assets={fund.topFundAssets}
                type={"short"}
                size={3}
                length={fund.totalAssetsCount}
              />
            </TableCell>
            <TableCell className="funds-table__cell funds-table__cell--investors">
              {fund.statistic.investorsCount}
            </TableCell>
            <TableCell className="funds-table__cell funds-table__cell--drawdown">
              <NumberFormat
                value={formatValue(fund.statistic.drawdownPercent, 2)}
                suffix="%"
                displayType="text"
              />
            </TableCell>
            <TableCell className="funds-table__cell funds-table__cell--profit">
              <Profitability value={fund.statistic.profitPercent} prefix="sign">
                <NumberFormat
                  value={formatValue(fund.statistic.profitPercent, 2)}
                  suffix="%"
                  allowNegative={false}
                  displayType="text"
                />
              </Profitability>
            </TableCell>
            <TableCell className="funds-table__cell funds-table__cell--chart">
              <ProgramSimpleChart data={fund.chart} programId={fund.id} />
            </TableCell>
          </TableRow>
        )}
      />
    );
  }
}

export default translate()(DashboardFunds);
