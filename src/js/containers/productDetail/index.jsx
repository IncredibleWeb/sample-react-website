import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import reducerInjector from "../../util/reducerInjector";
import { REDUCER_NAME } from "./constants";
import { fetchProductsDetail } from "./actions";
import { productDetailReducer, getProductsDetailState } from "./reducer";
import { getPageState } from "../page/reducer";
import { getAppState } from "../app/reducer";

class ProductsDetail extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      prevUrl: ""
    };
  }

  componentDidMount() {
    const { app, onLoadProductsDetail, match } = this.props;
    if (app.url !== match.url) {
      onLoadProductsDetail({
        url: match.url
      });
    }
    let path = window.location.pathname.split("/");
    this.setState({
      prevUrl: path[1]
    });
  }

  render() {
    const { page } = this.props;
    const parentUrl = "/" + this.state.prevUrl + "/";
    return (
      <section className="page">
        <div className="page-content">
          <div className="products-detail">
            <div>
              <div className="detail-page-heading">
                <Link to={parentUrl} className="detail-page-heading-link">
                  Go to all products
                </Link>
              </div>
              <div className="page-content-text">
                {page.title && <h1 className="page-title">{page.title}</h1>}
                <div
                  className="page-richtext"
                  dangerouslySetInnerHTML={{ __html: page.html }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  static fetchData(store, { path }) {
    return store.dispatch(fetchProductsDetail({ url: path }));
  }

  static getReducer() {
    return { key: REDUCER_NAME, reducer: productDetailReducer };
  }
}

// maps the redux store state to the props related to the data from the store
const mapStateToProps = state => {
  return {
    app: getAppState(state).toJS(),
    page: getPageState(state).toJS(),
    ...getProductsDetailState(state).toJS()
  };
};

// specifies the behaviour, which callback prop dispatches which action
const mapDispatchToProps = dispatch => ({
  onLoadProductsDetail: data => dispatch(fetchProductsDetail(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reducerInjector(REDUCER_NAME, productDetailReducer)(ProductsDetail));
