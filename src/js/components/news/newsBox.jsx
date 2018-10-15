import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import NewsBoxItem from "./newsBoxItem";
import {
  PAGE_NUMBER_QUERY_STRING_PARAM,
  PAGE_SIZE_QUERY_STRING_PARAM
} from "../../containers/news/constants";
import Pagination from "../pagination/pagination";

const NewsBox = ({
  news,
  newsList,
  displayLimit,
  isMinimised,
  pagination,
  onChangePageClick,
  url,
  categoriesCount,
  ...props
}) => {
  if (news && newsList && newsList.length > 0) {
    let itemsToDisplay = newsList;
    let showPagination = pagination && pagination.page < pagination.pageCount;

    if (displayLimit) {
      itemsToDisplay = newsList.slice(0, displayLimit);
    }

    return (
      <section>
        <div className="news-container">
          {isMinimised && (
            <div className="news-heading">
              {news.title && (
                <h2 className="news-heading-title">{news.title}</h2>
              )}
              {news.url && (
                <Link
                  to={news.url}
                  title={news.title}
                  data-category="Updates and publications"
                  className="news-heading-link"
                >
                  all updates
                </Link>
              )}
            </div>
          )}
          <div className="news-list">
            {itemsToDisplay &&
              itemsToDisplay.map(n => (
                <div className={`news-list-item`} key={n.id}>
                  <NewsBoxItem
                    data={n}
                    index={n.id}
                    categoriesCount={categoriesCount}
                  />
                </div>
              ))}
          </div>
          {showPagination && (
            <Pagination
              url={url}
              page={pagination.page}
              pageSize={pagination.pageSize}
              pageCount={pagination.pageCount}
              itemCount={pagination.itemCount}
              onChangePageClick={onChangePageClick}
              text={"SHOW MORE NEWS"}
            />
          )}
        </div>
      </section>
    );
  }
  return null;
};

NewsBox.propTypes = {
  news: PropTypes.object,
  pagination: PropTypes.shape({
    page: PropTypes.number,
    pageSize: PropTypes.number,
    pageCount: PropTypes.number,
    itemCount: PropTypes.number
  }),
  onChangePageClick: PropTypes.func,
  url: PropTypes.string
};

export default NewsBox;
