import "./program-trades.scss";

import Profitability from "components/profitability/profitability";
import { TableCell, TableRow } from "modules/table/components";
import DateRangeFilter from "modules/table/components/filtering/date-range-filter/date-range-filter";
import { DATE_RANGE_FILTER_NAME } from "modules/table/components/filtering/date-range-filter/date-range-filter.constants";
import TableModule from "modules/table/components/table-module";
import { DEFAULT_PAGING } from "modules/table/reducers/table-paging.reducer";
import moment from "moment";
import React, { Component, Fragment } from "react";
import { translate } from "react-i18next";
import NumberFormat from "react-number-format";
import { formatValue } from "utils/formatter";

import BaseProfitability from "../../../../../../components/profitability/base-profitability";
import {
  PROGRAM_TRADES_COLUMNS,
  PROGRAM_TRADES_DEFAULT_FILTERS,
  PROGRAM_TRADES_FILTERS
} from "../../../program-details.constants";
import * as service from "../../../services/program-details.service";

class ProgramTrades extends Component {
  fetchProgramTrades = filters => {
    const { programId, currency } = this.props;

    return service
      .getProgramTrades({ programId, currency, filters })
      .then(({ data }) => {
        return { items: data.trades, total: data.total };
      });
  };

  render() {
    const { t, trades } = this.props;
    let data = { trades: null, total: 0 };
    if (trades) {
      data.items = trades.trades;
      data.total = trades.total;
    }

    return (
      <TableModule
        fetchOnMount={false}
        data={data}
        getItems={this.fetchProgramTrades}
        defaultFilters={PROGRAM_TRADES_DEFAULT_FILTERS}
        filtering={PROGRAM_TRADES_FILTERS}
        renderFilters={(updateFilter, filtering) => (
          <Fragment>
            <DateRangeFilter
              name={DATE_RANGE_FILTER_NAME}
              value={filtering[DATE_RANGE_FILTER_NAME]}
              onChange={updateFilter}
              startLabel={t("filters.date-range.program-start")}
            />
          </Fragment>
        )}
        paging={DEFAULT_PAGING}
        columns={PROGRAM_TRADES_COLUMNS}
        renderHeader={column => (
          <span
            className={`program-details-trades__head-cell program-details-trades__cell--${
              column.name
            }`}
          >
            {t(`program-details-page.history.trades.${column.name}`)}
          </span>
        )}
        renderBodyRow={trade => (
          <TableRow className="program-details-trades__row">
            <TableCell className="program-details-trades__cell program-details-trades__cell--direction">
              <BaseProfitability
                isPositive={trade.direction === "Buy"}
                isNegative={trade.direction === "Sell"}
              >
                {trade.direction}
              </BaseProfitability>
            </TableCell>
            <TableCell className="program-details-trades__cell program-details-trades__cell--symbol">
              {trade.symbol}
            </TableCell>
            <TableCell className="program-details-trades__cell program-details-trades__cell--volume">
              {formatValue(trade.volume)}
            </TableCell>
            <TableCell className="program-details-trades__cell program-details-trades__cell--price">
              <NumberFormat
                value={formatValue(trade.price)}
                displayType="text"
                thousandSeparator=" "
              />
            </TableCell>
            <TableCell className="program-details-trades__cell program-details-trades__cell--profit">
              <Profitability value={+formatValue(trade.profit)} prefix="sign">
                {formatValue(trade.profit, null, true)}
              </Profitability>
            </TableCell>
            <TableCell className="program-details-trades__cell program-details-trades__cell--date">
              {moment(trade.date).format("DD-MM-YYYY, hh:mm a")}
            </TableCell>
            <TableCell className="program-details-trades__cell program-details-trades__cell--ticket">
              {trade.ticket}
            </TableCell>

            <TableCell className="program-details-trades__cell program-details-trades__cell--entry">
              {trade.entry}
            </TableCell>
          </TableRow>
        )}
      />
    );
  }
}

export default translate()(ProgramTrades);
