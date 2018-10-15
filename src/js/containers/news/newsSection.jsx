import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import reducerInjector from "../../util/reducerInjector";
import { REDUCER_NAME } from "./constants";
import { fetchNewsSection } from "./actions";
import { newsReducer, getNewsState } from "./reducer";
import ResponsiveImage from "../../components/banner/responsiveImage";
import NewsBox from "../../components/news/newsBox";

class NewsSection extends React.PureComponent {
  componentDidMount() {
    const { newsSection, onLoadNewsSection } = this.props;
    if (!newsSection) {
      onLoadNewsSection();
    }
  }

  render() {
    const { newsSection, isMinimised, displayLimit } = this.props;
    return (
      <section>
        {newsSection && (
          <div className="home-news-section">
            <div className="background-image">
              {newsSection.secondaryBanner && (
                <ResponsiveImage
                  src={newsSection.secondaryBanner.images.src}
                  srcset={newsSection.secondaryBanner.images.srcset}
                  alt={newsSection.secondaryBanner.images.alt}
                  title={newsSection.secondaryBanner.images.title}
                />
              )}
            </div>
            <NewsBox
              news={newsSection}
              newsList={newsSection.newsList}
              categoriesCount={newsSection.categoriesCount}
              isMinimised={isMinimised}
              displayLimit={displayLimit}
            />
          </div>
        )}
      </section>
    );
  }

  static fetchData(store, { path }) {
    return store.dispatch(fetchNewsSection());
  }

  static getReducer() {
    return { key: REDUCER_NAME, reducer: newsReducer };
  }
}

// maps the redux store state to the props related to the data from the store
const mapStateToProps = state => {
  return {
    ...getNewsState(state).toJS()
  };
};

// specifies the behaviour, which callback prop dispatches which action
const mapDispatchToProps = dispatch => ({
  onLoadNewsSection: data => dispatch(fetchNewsSection(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reducerInjector(REDUCER_NAME, newsReducer)(NewsSection));
