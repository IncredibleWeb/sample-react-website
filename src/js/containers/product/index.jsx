import React from "react";
import { connect } from "react-redux";

import reducerInjector from "../../util/reducerInjector";
import { REDUCER_NAME } from "./constants";
import { fetchProducts } from "./actions";
import { productsReducer, getProductsState } from "./reducer";
import { getPageState } from "../page/reducer";
import { getAppState } from "../app/reducer";
import OurProducts from "../../components/product/product";

class Products extends React.PureComponent {
  componentDidMount() {
    const { app, onLoadProducts, match } = this.props;
    if (app.url !== match.url) {
      onLoadProducts({
        url: match.url
      });
    }
  }

  render() {
    const { products } = this.props;
    return (
      <section className="our-products">
        <OurProducts products={products} />
      </section>
    );
  }

  static fetchData(store, { path }) {
    return store.dispatch(fetchProducts({ url: path }));
  }

  static getReducer() {
    return { key: REDUCER_NAME, reducer: productsReducer };
  }
}

// maps the redux store state to the props related to the data from the store
const mapStateToProps = state => {
  return {
    app: getAppState(state).toJS(),
    ...getProductsState(state).toJS()
  };
};

// specifies the behaviour, which callback prop dispatches which action
const mapDispatchToProps = dispatch => ({
  onLoadProducts: data => dispatch(fetchProducts(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reducerInjector(REDUCER_NAME, productsReducer)(Products));
