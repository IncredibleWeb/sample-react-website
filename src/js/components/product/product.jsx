import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Overlay from "../nav/overlay";
import ProductsItem from "./productItem";
import { createHtmlList } from "../../util/util";

class Products extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false
    };
  }

  render() {
    const { products, displayLimit, isMinimised } = this.props;

    if (products && products.children && products.children.length > 0) {
      let itemsToDisplay = [];
      if (displayLimit) {
        itemsToDisplay = products.children.slice(0, displayLimit);
      } else {
        itemsToDisplay = products.children;
      }

      return (
        <section>
          <div className="products-container page-section-container">
            {products.title &&
              isMinimised && (
                <h2 className="section-heading">{products.title}</h2>
              )}
            <div className="products-list section-list">
              {itemsToDisplay &&
                itemsToDisplay.map(n => (
                  <div
                    className={`products-list-item ${
                      displayLimit < 3 ? "two-column" : "three-column"
                    }`}
                    key={n.id}
                  >
                    <ProductsItem data={n} index={n.id} />
                  </div>
                ))}
            </div>
            {isMinimised && (
              <div className="products-button">
                <Link
                  to={products.url}
                  title={products.title}
                  data-category="Products"
                  className="button"
                >
                  Learn all products
                </Link>
              </div>
            )}
          </div>
        </section>
      );
    }
    return null;
  }
}

Products.propTypes = {
  products: PropTypes.object
};

export default Products;
