import React from "react";
import PropTypes from "prop-types";

class Snackbar extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isDismissed: false
    };
  }

  componentDidMount() {
    const { ttl } = this.props;
    this.toggleSnackbar({ element: this.element, ttl });
  }

  render() {
    const { message } = this.props;
    return (
      <div
        ref={n => {
          this.element = n;
        }}
        className={`snackbar ${
          this.state.isDismissed ? "snackbar--dismissed" : ""
        }`}
      >
        <p className="snackbar-text">{message}</p>
      </div>
    );
  }

  toggleSnackbar({ element, ttl }) {
    if (element && ttl) {
      this.setState({ isDismissed: false });
      setTimeout(() => {
        this.setState({ isDismissed: true });
        setTimeout(() => {
          this.element.parentElement.removeChild(this.element);
        }, 300);
      }, ttl);
    }
  }
}

Snackbar.propTypes = {
  message: PropTypes.string.isRequired,
  ttl: PropTypes.number
};

export default Snackbar;
