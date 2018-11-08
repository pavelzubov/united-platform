import { CardsIcon } from "components/icon/cards-icon";
import { TableIcon } from "components/icon/table-icon";
import React, { Component } from "react";

import SortingFilter from "./sorting/sorting-filter/sorting-filter";
import { CARDS_VIEW, TABLE_VIEW } from "./table";

class TableToolbar extends Component {
  handleIconClick = view => e => {
    this.props.onChange(view);
  };

  render() {
    const {
      title,
      renderFilters,
      updateFilter,
      filtering,
      view,
      columns,
      sorting,
      updateSorting,
      renderHeader,
      isViewSwitchEnabled,
      createButtonToolbar
    } = this.props;
    return (
      <div className="table__toolbar">
        {title && <div className="table__title">{title}</div>}
        {view === CARDS_VIEW &&
          sorting !== undefined && (
            <div className="table__filters">
              <SortingFilter
                sorting={sorting}
                columns={columns}
                updateSorting={updateSorting}
                renderValueText={renderHeader}
              />
            </div>
          )}
        {renderFilters && (
          <div className="table__filters">
            {renderFilters(updateFilter, filtering)}
          </div>
        )}
        {isViewSwitchEnabled && (
          <div className="table__toggle">
            <div onClick={this.handleIconClick(CARDS_VIEW)}>
              <CardsIcon primary={view === CARDS_VIEW} />
            </div>
            <div onClick={this.handleIconClick(TABLE_VIEW)}>
              <TableIcon primary={view === TABLE_VIEW} />
            </div>
          </div>
        )}
        {createButtonToolbar}
      </div>
    );
  }
}

export default TableToolbar;
