import { SET_PRODUCT_DETAIL } from "./constants";
import { renderPage } from "../page/actions";
import Api from "../../../../service/main";

const loadProductsDetail = data => ({
  type: SET_PRODUCT_DETAIL,
  data
});

export const getProductsDetail = data => dispatch =>
  Api.products
    .getProductsDetailPage(data)
    .then(response => {
      dispatch(loadProductsDetail(response));
      return response;
    })
    .catch(error => {
      throw error;
    });

export const fetchProductsDetail = data => dispatch =>
  renderPage({ get: getProductsDetail, data })(dispatch);
