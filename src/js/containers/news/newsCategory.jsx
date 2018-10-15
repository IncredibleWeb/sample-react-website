import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import reducerInjector from "../../util/reducerInjector";
import {
  REDUCER_NAME,
  PAGE_NUMBER_QUERY_STRING_PARAM,
  PAGE_SIZE_QUERY_STRING_PARAM,
  PAGE_SIZE_VALUE
} from "./constants";
import { fetchNewsCategory, fetchMoreNewsCategory } from "./actions";
import { newsReducer, getNewsState } from "./reducer";
import { getPageState } from "../page/reducer";
import { getAppState } from "../app/reducer";
import NewsBox from "../../components/news/newsBox";
import { getParameterByName } from "../../util/util";

class NewsCategory extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      categoryUrl: "",
      allNewsUrl: ""
    };
  }
  componentDidMount() {
    const { app, onLoadNews, match } = this.props;

    if (app.url !== match.url) {
      const page =
        getParameterByName(PAGE_NUMBER_QUERY_STRING_PARAM, location.search) ||
        1;
      const pageSize =
        getParameterByName(PAGE_SIZE_QUERY_STRING_PARAM, location.search) ||
        PAGE_SIZE_VALUE;

      onLoadNews({
        url: match.url,
        page: parseInt(page),
        pageSize: parseInt(pageSize)
      });
    }

    let path = window.location.pathname.split("/");
    this.setState({
      allNewsUrl: path[1],
      categoryUrl: match.url
    });
  }

  render() {
    const { page, categoryNews, pagination, onLoadMoreNews } = this.props;
    const parentUrl = "/" + this.state.allNewsUrl + "/";
    return (
      <section className="news">
        <div className="news-content">
          <div className="news-wrapper">
            <div className="news-category-heading-link">
              <Link to={parentUrl}>all updates</Link>
            </div>
            <NewsBox
              news={categoryNews}
              newsList={categoryNews.newsList}
              pagination={pagination}
              onChangePageClick={e =>
                onChangePageClick(this.state.categoryUrl, e, onLoadMoreNews)
              }
              url={categoryNews.url}
            />
          </div>
        </div>
      </section>
    );
  }

  static fetchData(store, { match, query }) {
    const page = query[PAGE_NUMBER_QUERY_STRING_PARAM] || 1;
    const pageSize = query[PAGE_SIZE_QUERY_STRING_PARAM] || PAGE_SIZE_VALUE;

    return store.dispatch(
      fetchNewsCategory({
        url: match.path,
        page: parseInt(page),
        pageSize: parseInt(pageSize)
      })
    );
  }

  static getReducer() {
    return { key: REDUCER_NAME, reducer: newsReducer };
  }
}

// event triggered when user clicks on any pagination button
const onChangePageClick = (url, e, callback) => {
  e.preventDefault();

  // retrieve page number, page size and search string from the URL query string
  let page =
    getParameterByName(PAGE_NUMBER_QUERY_STRING_PARAM, e.target.href) || 1;
  const pageSize =
    getParameterByName(PAGE_SIZE_QUERY_STRING_PARAM, e.target.href) ||
    PAGE_SIZE_VALUE;

  // add page number and page size to the URL
  window.history.pushState(null, "", e.target.href);
  // retrieve the data
  return callback({
    url: url,
    page: parseInt(page),
    pageSize: parseInt(pageSize)
  });
};

// maps the redux store state to the props related to the data from the store
const mapStateToProps = state => {
  return {
    app: getAppState(state).toJS(),
    page: getPageState(state).toJS(),
    ...getNewsState(state).toJS()
  };
};

// specifies the behaviour, which callback prop dispatches which action
const mapDispatchToProps = dispatch => ({
  onLoadNews: data => dispatch(fetchNewsCategory(data)),
  onLoadMoreNews: data => dispatch(fetchMoreNewsCategory(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reducerInjector(REDUCER_NAME, newsReducer)(NewsCategory));
