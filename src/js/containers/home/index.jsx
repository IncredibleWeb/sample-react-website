import React from "react";
import { connect } from "react-redux";

import Thumbnail from "../../components/page/thumbnail";
import reducerInjector from "../../util/reducerInjector";
import { REDUCER_NAME } from "./constants";
import { fetchHome } from "./actions";
import { homeReducer, getHomeState } from "./reducer";
import { getPageState } from "../page/reducer";
import { getAppState } from "../app/reducer";
import ProductsSection from "../product/productSection";
import NewsBoxSection from "../news/newsSection";

class Home extends React.PureComponent {
  componentDidMount() {
    const { app, onLoadHome, match } = this.props;

    if (app.url !== match.url) {
      onLoadHome({ url: match.url });
    }
  }

  render() {
    const { page } = this.props;
    return (
      <section className="home">
        <div className="home-section">
          <div className="home-content">
            <h1 className="home-title">{page.title}</h1>
            <div className="home-row">
              <div className="two-column">
                <div
                  className="home-richtext"
                  dangerouslySetInnerHTML={{ __html: page.html }}
                />
              </div>
              <div className="two-column">
                <div className="home-thumbnail">
                  <Thumbnail image={page.thumbnail} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProductsSection isMinimised={true} displayLimit={6} />
        <NewsBoxSection isMinimised={true} displayLimit={2} />
      </section>
    );
  }

  static fetchData(store, { match }) {
    return store.dispatch(fetchHome({ url: match.path }));
  }

  static getReducer() {
    return { key: REDUCER_NAME, reducer: homeReducer };
  }
}

// maps the redux store state to the props related to the data from the store
const mapStateToProps = state => {
  return {
    app: getAppState(state).toJS(),
    page: getPageState(state).toJS(),
    ...getHomeState(state).toJS()
  };
};

// specifies the behaviour, which callback prop dispatches which action
const mapDispatchToProps = dispatch => ({
  onLoadHome: data => dispatch(fetchHome(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reducerInjector(REDUCER_NAME, homeReducer)(Home));
