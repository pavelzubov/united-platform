import { Range } from "rc-slider";
import React from "react";
import { translate } from "react-i18next";

import FilterItem from "../../../../../../filter-pane/components/filter-item/filter-item";
import { RANGE_FILTER_TYPE } from "../../../../../../filtering/filtering.constants";
import {
  LEVEL_FILTER_NAME,
  LEVEL_MAX_FILTER_VALUE,
  LEVEL_MIN_FILTER_VALUE
} from "../../../../../programs.constants";

const LevelFilter = ({ t, filtering, onFilterChange }) => {
  const handleFilterChange = value =>
    onFilterChange(LEVEL_FILTER_NAME, RANGE_FILTER_TYPE)(value);

  return (
    <FilterItem
      name={t(`programs-filtering.${LEVEL_FILTER_NAME}.name`)}
      description={t(`programs-filtering.${LEVEL_FILTER_NAME}.description`)}
      value={filtering.filters[LEVEL_FILTER_NAME]}
      defaultValue={filtering.defaultFilters[LEVEL_FILTER_NAME]}
      onFilterChange={handleFilterChange}
    >
      {(value, onChange) => (
        <Range
          dots
          min={LEVEL_MIN_FILTER_VALUE}
          max={LEVEL_MAX_FILTER_VALUE}
          marks={new Array(LEVEL_MAX_FILTER_VALUE)
            .fill(0)
            .reduce((prev, curr, idx) => {
              prev[idx + 1] = idx + 1;
              return prev;
            }, {})}
          value={value}
          onChange={onChange}
          pushable
        />
      )}
    </FilterItem>
  );
};

export default translate()(LevelFilter);
