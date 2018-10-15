import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Card from "../../components/card/card";

const ProductsItem = ({ data, className, ...props }) => {
  if (data) {
    return (
      <Link
        to={data.url}
        title={data.title}
        data-category="PRODUCT DETAIL PAGE"
      >
        <div className="products-wrapper">
          <div className="products-item-title">{data.title}</div>
          <div className="read-more">
            <div className="read-more-link">read more</div>
          </div>
        </div>
      </Link>
    );
  }
  return null;
};

ProductsItem.propTypes = {
  data: PropTypes.object
};

export default ProductsItem;
