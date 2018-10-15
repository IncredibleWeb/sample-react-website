import React from "react";
import { connect } from "react-redux";

import Thumbnail from "../../components/page/thumbnail";
import reducerInjector from "../../util/reducerInjector";
import { REDUCER_NAME } from "./constants";
import { fetchPage } from "./actions";
import { pageReducer, getPageState } from "./reducer";
import { getAppState } from "../app/reducer";

const INCLUDE_CHILDREN = false;
const PAGE_NOT_FOUND_URL = "/page-not-found/";

class Page extends React.PureComponent {
  componentDidMount() {
    const { app, match, url, onLoadPage } = this.props;
    if (
      (app.url !== PAGE_NOT_FOUND_URL && app.url !== match.url) ||
      app.url !== url
    ) {
      onLoadPage({ url: url || match.path, children: INCLUDE_CHILDREN });
    }
  }

  render() {
    const { page } = this.props;
    return (
      <section className="page">
        <div className="page-content">
          <div className="page-content-wrapper">
            {page.thumbnail && (
              <div className="page-content-thumb">
                <Thumbnail image={page.thumbnail} />
              </div>
            )}
            <div className="page-content-text">
              {page.title && <h1 className="page-title">{page.title}</h1>}
              <div
                className="page-richtext"
                dangerouslySetInnerHTML={{ __html: page.html }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  static fetchData(store, { match }) {
    return store.dispatch(
      fetchPage({ url: match.path, children: INCLUDE_CHILDREN })
    );
  }

  static getReducer() {
    return { key: REDUCER_NAME, reducer: pageReducer };
  }
}

// maps the redux store state to the props related to the data from the store
const mapStateToProps = state => ({
  app: getAppState(state).toJS(),
  page: getPageState(state).toJS()
});

// specifies the behaviour, which callback prop dispatches which action
const mapDispatchToProps = dispatch => {
  return {
    onLoadPage: data => dispatch(fetchPage(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reducerInjector(REDUCER_NAME, pageReducer)(Page));
