import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import ChangePageLink from "./changePageLink";

const Pagination = ({
  page,
  pageSize,
  pageCount,
  itemCount,
  onChangePageClick,
  url,
  queryString,
  text
}) => {
  if (pageCount > 1) {
    let pageIncrement = +page + 1;

    return (
      <div className="news-button">
        <div className="pagination-icon" />
        <ChangePageLink
          pageNumber={pageIncrement}
          isCurrentPage={true}
          url={url}
          text={text}
          onClick={onChangePageClick}
          pageSize={pageSize}
        />
      </div>
    );
  }

  return null;
};

Pagination.propTypes = {
  page: PropTypes.number,
  pageSize: PropTypes.number,
  pageCount: PropTypes.number,
  itemCount: PropTypes.number
};

export default Pagination;
