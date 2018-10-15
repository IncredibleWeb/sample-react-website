import React from "react";
import { withRouter } from "react-router-dom";

class ScrollToElement extends React.PureComponent {
  componentDidUpdate(prevProps) {
    if (this.props.element && this.props.location !== prevProps.location) {
      if (this.props.element.getBoundingClientRect().top < 0) {
        const threshold = document.querySelector("header").clientHeight;
        this.props.element.scrollIntoView(true);
        setTimeout(() => {
          window.scrollBy(0, -threshold);
        });
      }
    }
  }

  render() {
    return null;
  }
}

export default withRouter(ScrollToElement);
