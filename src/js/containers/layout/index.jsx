import React from "react";
import { connect } from "react-redux";

import Header from "../header/index";
import Footer from "../footer/index";
import Meta from "../../components/meta/meta";
import Fade from "../../components/transitions/fade";
import ScrollToTop from "../../components/routes/scrollToTop";
import { getAppState } from "../app/reducer";
import { getPageState } from "../page/reducer";
import { ERROR_MESSAGE } from "./constants";
import ErrorMessage from "../../components/snackbar/snackbar";

class Layout extends React.PureComponent {
  constructor(props) {
    super(props);

    this.main = null;
  }

  // returns the JSX that will be rendered for this component
  render() {
    const { children, page, app } = this.props;

    return (
      <div className="layout">
        {page.resetScroll && <ScrollToTop />}
        <Meta meta={app.meta} url={app.url} />
        <Header view={page.view} />
        {app.isError && <ErrorMessage message={ERROR_MESSAGE} />}
        <div
          className={`main-banner ${
            page.banners.length === 0 && !app.isLoading
              ? "main-banner--empty"
              : ""
          }`}
        />
        <Fade in={!app.isLoading} className="main-">
          <main
            id="main"
            className={`main ${app.isLoading ? "main--loading" : ""} ${
              app.isError ? "main--error" : ""
            }`}
            ref={n => (this.main = n)}
          >
            {children}
          </main>
        </Fade>
        <Footer />
      </div>
    );
  }
}

// maps the redux store state to the props related to the data from the store
const mapStateToProps = state => {
  return { app: getAppState(state).toJS(), page: getPageState(state).toJS() };
};

export default connect(mapStateToProps)(Layout);
