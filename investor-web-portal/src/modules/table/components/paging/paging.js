import "./paging.scss";

import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import Pager from "react-pager";

class Paging extends PureComponent {
  render() {
    const { paging, hidden, updatePaging } = this.props;
    if (hidden || paging.total === 0) return null;

    return (
      <Pager
        total={paging.total}
        current={paging.current - 1}
        visiblePages={3}
        onPageChanged={nextPage => updatePaging({ currentPage: nextPage })}
      />
    );
  }
}

Paging.propTypes = {
  paging: PropTypes.shape({
    total: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired
  }),
  hidden: PropTypes.bool,
  updatePaging: PropTypes.func.isRequired
};

export default Paging;
