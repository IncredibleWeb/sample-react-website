import React from "react";
import { connect } from "react-redux";

import reducerInjector from "../../util/reducerInjector";
import { REDUCER_NAME } from "./constants";
import { fetchProductsSection } from "./actions";
import { productsReducer, getProductsState } from "./reducer";
import OurProducts from "../../components/product/product";

class ProductsSection extends React.PureComponent {
  componentDidMount() {
    const { productSection, onLoadProductsSection } = this.props;
    if (!productSection) {
      onLoadProductsSection();
    }
  }

  render() {
    const { productSection, isMinimised, displayLimit } = this.props;
    return (
      <section>
        <OurProducts
          products={productSection}
          isMinimised={isMinimised}
          displayLimit={displayLimit}
        />
      </section>
    );
  }

  static fetchData(store, { path }) {
    return store.dispatch(fetchProductsSection());
  }

  static getReducer() {
    return { key: REDUCER_NAME, reducer: productsReducer };
  }
}

// maps the redux store state to the props related to the data from the store
const mapStateToProps = state => {
  return {
    ...getProductsState(state).toJS()
  };
};

// specifies the behaviour, which callback prop dispatches which action
const mapDispatchToProps = dispatch => ({
  onLoadProductsSection: data => dispatch(fetchProductsSection(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reducerInjector(REDUCER_NAME, productsReducer)(ProductsSection));
