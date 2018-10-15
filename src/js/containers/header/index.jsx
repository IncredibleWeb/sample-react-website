import Modernizr from "modernizr";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import throttle from "lodash/throttle";

import reducerInjector from "../../util/reducerInjector";
import Nav from "../../components/nav/nav";
import NavDesktop from "../../components/nav/navDesktop";
import { fetchHeader, setNavItemActive } from "./actions";
import { LOGO_DESCRIPTION, REDUCER_NAME } from "./constants";
import { getAppState } from "../app/reducer";
import { headerReducer, getHeaderState } from "./reducer";

class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showLogo: false
    };
    this.calculateStickyLogo = this.calculateStickyLogo.bind(this);
  }

  componentDidMount() {
    const { onLoadHeader, onSetNavItemActive } = this.props;

    // set initial navigation item
    onSetNavItemActive({
      href: location.pathname
    });

    // set the navigation bar to opaque
    calculateOpacity({
      anchor: this.scrollAnchor,
      element: this.headerBackground,
      threshold: 200
    });

    // translate the navigation menu upwards to hide the logo
    calculateTransform({
      anchor: this.scrollAnchor,
      element: this.navDesktop.element,
      height: this.navDesktop.element.clientHeight,
      threshold: 40
    });

    window.addEventListener(
      "scroll",
      throttle(() => {
        this.calculateStickyLogo();
        calculateOpacity({
          anchor: this.scrollAnchor,
          element: this.headerBackground,
          threshold: 200
        });

        calculateTransform({
          anchor: this.scrollAnchor,
          element: this.navDesktop.element,
          height: this.navDesktop.element.clientHeight,
          threshold: 40
        });
      }, 10),
      Modernizr.passiveeventlisteners ? { passive: true } : false
    );
  }

  render() {
    const { nav, onSetNavItemActive, view } = this.props;
    const logo = {
      src: "/img/logo.png",
      alt: LOGO_DESCRIPTION,
      title: LOGO_DESCRIPTION
    };

    return (
      <div ref={n => (this.scrollAnchor = n)}>
        <header>
          <div
            ref={n => (this.headerBackground = n)}
            className="header-background"
            style={{ opacity: 0 }}
          />
          <NavDesktop
            logo={logo}
            nav={nav}
            onSetNavItemActive={onSetNavItemActive}
            ref={n => (this.navDesktop = n)}
            view={view}
            showLogo={this.state.showLogo}
          />
        </header>
        <Nav logo={logo} nav={nav} onSetNavItemActive={onSetNavItemActive} />
      </div>
    );
  }

  calculateStickyLogo() {
    // TODO: should update based on position relative to each other
    if (window.pageYOffset > window.innerHeight / 2) {
      this.setState({ showLogo: true });
    } else {
      this.setState({ showLogo: false });
    }
  }

  static fetchData(store) {
    return store.dispatch(fetchHeader());
  }

  static getReducer() {
    return { key: REDUCER_NAME, reducer: headerReducer };
  }
}

const calculateOpacity = ({ anchor, element, threshold }) => {
  const calc = (-1 * anchor.getBoundingClientRect().top) / threshold;

  if (calc > 1) {
    element.style.opacity = 1;
  } else if (calc < 0) {
    element.style.opacity = 0;
  } else {
    element.style.opacity = calc;
  }
};

const calculateTransform = ({ anchor, element, height, threshold }) => {
  const calc = anchor.getBoundingClientRect().top;

  if (calc > 0) {
    element.style.transform = `translateY(0px)`;
  } else if (calc < threshold - height) {
    element.style.transform = `translateY(${threshold - height}px)`;
  } else {
    element.style.transform = `translateY(${calc}px)`;
  }
};

// maps the redux store state to the props related to the data from the store
const mapStateToProps = state => getHeaderState(state).toJS();

// specifies the behaviour, which callback prop dispatches which action
const mapDispatchToProps = dispatch => ({
  onSetNavItemActive: data => dispatch(setNavItemActive(data)),
  onLoadHeader: data => dispatch(fetchHeader(data))
});

// inject a new reducer for this component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reducerInjector(REDUCER_NAME, headerReducer)(Header));
