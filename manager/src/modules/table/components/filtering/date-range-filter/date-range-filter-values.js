import GVDatePicker from "components/gv-datepicker/gv-datepicker";
import { GVTextField } from "gv-react-components";
import moment from "moment";
import React, { Component, Fragment } from "react";
import { translate } from "react-i18next";

import { DateRangeFilterTypes } from "./date-range-filter.constants";

class DateRangeFilterValues extends Component {
  handleOnChange = type => e => {
    this.props.onChange(type, e.target.value);
  };

  renderFirstInput = value => {
    const { t } = this.props;
    return (
      <GVTextField
        wrapperClassName="date-range-filter__date-input"
        type="text"
        name="startDate"
        label={t("filters.date-range.start")}
        value={value}
        disabled
      />
    );
  };

  renderSecondInput = () => {
    const { t } = this.props;
    return (
      <GVTextField
        wrapperClassName="date-range-filter__date-input"
        type="text"
        name="endDate"
        label={t("filters.date-range.end")}
        value={t("filters.date-range.today")}
        disabled
      />
    );
  };

  render() {
    const { t, type, dateStart, dateEnd, startLabel } = this.props;
    switch (type) {
      case DateRangeFilterTypes.all:
        return (
          <Fragment>
            {this.renderFirstInput(startLabel)}
            {this.renderSecondInput()}
          </Fragment>
        );
      case DateRangeFilterTypes.lastMonth:
        return (
          <Fragment>
            {this.renderFirstInput(
              new moment().subtract(1, "month").format("MMM Do YY")
            )}
            {this.renderSecondInput()}
          </Fragment>
        );
      case DateRangeFilterTypes.lastWeek:
        return (
          <Fragment>
            {this.renderFirstInput(
              new moment().subtract(1, "week").format("MMM Do YY")
            )}
            {this.renderSecondInput()}
          </Fragment>
        );
      case DateRangeFilterTypes.custom:
      default:
        return (
          <Fragment>
            <GVTextField
              wrapperClassName="date-range-filter__date-input"
              type="text"
              name="dateStart"
              label={t("filters.date-range.start")}
              value={dateStart}
              InputComponent={GVDatePicker}
              horizontal="right"
              maxDate={new Date()}
              onChange={this.handleOnChange("dateStart")}
            />
            <GVTextField
              wrapperClassName="date-range-filter__date-input"
              type="text"
              name="dateEnd"
              label={t("filters.date-range.end")}
              value={dateEnd}
              horizontal="right"
              InputComponent={GVDatePicker}
              minDate={dateStart}
              maxDate={new Date()}
              onChange={this.handleOnChange("dateEnd")}
            />
          </Fragment>
        );
    }
  }
}

export default translate()(DateRangeFilterValues);
