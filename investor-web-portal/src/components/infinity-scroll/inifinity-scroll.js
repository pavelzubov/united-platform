import PropTypes from "prop-types";
import React, { Component } from "react";
import { Scrollbars } from "react-custom-scrollbars";

class InfinityScroll extends Component {
  handleScroll = () => {
    const scroll = this.scroll.current;
    const scrollTop = scroll.getScrollTop();
    const clientHeight = scroll.getClientHeight();
    const scrollHeight = scroll.getScrollHeight();
    const offsetBottom = scrollHeight - scrollTop - clientHeight;
    if (offsetBottom < 100 && this.props.hasMore) {
      this.props.loadMore();
    }
  };

  scroll = React.createRef();

  render() {
    return (
      <Scrollbars onScroll={this.handleScroll} ref={this.scroll}>
        {this.props.children}
      </Scrollbars>
    );
  }
}

InfinityScroll.propTypes = {
  loadMore: PropTypes.func.isRequired,
  hasMore: PropTypes.bool
};

export default InfinityScroll;
