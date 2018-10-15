import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Card from "../../components/card/card";

const NewsBoxItem = ({ data, categoriesCount, className, ...props }) => {
  if (data) {
    return (
      <div className="news-wrapper">
        <div className="header">
          {categoriesCount > 1 && (
            <div className="tag">
              <Link to={data.categoryPage.url} title={data.categoryPage.title}>
                {data.categoryPage.title}
              </Link>
            </div>
          )}
          <div className="date">{data.date}</div>
        </div>
        <h3 className="title">{data.title}</h3>
        <div
          className="text page-content__richtext"
          dangerouslySetInnerHTML={{
            __html: data.summary
          }}
        />
        {data.url && (
          <Link to={data.url} title={data.title} className="read-more-link">
            read more
          </Link>
        )}
      </div>
    );
  }
  return null;
};

NewsBoxItem.propTypes = {
  data: PropTypes.object
};

export default NewsBoxItem;
