import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Thumbnail from "../../components/page/thumbnail";
import reducerInjector from "../../util/reducerInjector";
import { getParameterByName } from "../../util/util";
import { REDUCER_NAME } from "./constants";
import { fetchNewsDetail } from "./actions";
import { newsDetailReducer, getNewsDetailState } from "./reducer";
import { getPageState } from "../page/reducer";
import { getAppState } from "../app/reducer";

class NewsDetail extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      prevUrl: ""
    };
  }
  componentDidMount() {
    const { app, onLoadNewsDetail, match } = this.props;
    if (app.url !== match.url) {
      onLoadNewsDetail({
        url: match.url
      });
    }

    let path = window.location.pathname.split("/");
    this.setState({
      prevUrl: path[1]
    });
  }

  render() {
    const { newsDetail } = this.props;
    const parentUrl = "/" + this.state.prevUrl + "/";
    return (
      <section className="page">
        <div className="page-content">
          <div className="page-content-wrapper">
            <div className="detail-page-heading">
              <Link to={parentUrl} className="detail-page-heading-link">
                back to updates & publications
              </Link>
            </div>
            {newsDetail.thumbnail && (
              <div className="page-content-thumb">
                <Thumbnail image={newsDetail.thumbnail} />
              </div>
            )}
            <div className="page-content-text">
              <div className="page-content-header">
                {newsDetail.category && (
                  <div className="page-category">{newsDetail.category}</div>
                )}
                {newsDetail.date && (
                  <div className="page-date">{newsDetail.date}</div>
                )}
              </div>
              {newsDetail.title && (
                <h1 className="page-title">{newsDetail.title}</h1>
              )}
              <div
                className="page-richtext"
                dangerouslySetInnerHTML={{ __html: newsDetail.html }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  static fetchData(store, { path }) {
    return store.dispatch(fetchNewsDetail({ url: path }));
  }

  static getReducer() {
    return { key: REDUCER_NAME, reducer: newsDetailReducer };
  }
}

// maps the redux store state to the props related to the data from the store
const mapStateToProps = state => {
  return {
    app: getAppState(state).toJS(),
    ...getNewsDetailState(state).toJS()
  };
};

// specifies the behaviour, which callback prop dispatches which action
const mapDispatchToProps = dispatch => ({
  onLoadNewsDetail: data => dispatch(fetchNewsDetail(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reducerInjector(REDUCER_NAME, newsDetailReducer)(NewsDetail));
