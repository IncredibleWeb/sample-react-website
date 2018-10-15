import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import NavTree from "./navTree";

class NavDesktop extends React.PureComponent {
  constructor(props) {
    super(props);

    this.element = null;
  }

  render() {
    const { logo, nav, onSetNavItemActive, view, showLogo } = this.props;

    return (
      <div ref={n => (this.element = n)} className="nav-desktop">
        {logo.src !== "" && (
          <Link
            to="/"
            className={`logo-desktop ${
              view === "home" ? "home-page-logo " : ""
            }${showLogo ? "fade-in-logo " : "fade-out-logo "}`}
          >
            <img src={logo.src} alt={logo.alt} title={logo.title} />
          </Link>
        )}
        <div className="nav-links">
          <NavTree
            nav={nav}
            onLinkClick={e => {
              this.onLinkClick(e, onSetNavItemActive);
            }}
          />
        </div>
      </div>
    );
  }

  onLinkClick(e, onSetNavItemActive) {
    const href = e.target.getAttribute("href");

    onSetNavItemActive({
      href
    });
  }
}

// type-checking
NavDesktop.propTypes = {
  logo: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  nav: PropTypes.object.isRequired
};

export default NavDesktop;
