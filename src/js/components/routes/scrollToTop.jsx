import React from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends React.PureComponent {
  componentDidUpdate(prevProps) {
    if (
      !this.props.ignoreScrollBehavior &&
      this.props.location !== prevProps.location
    ) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return null;
  }
}

export default withRouter(ScrollToTop);
