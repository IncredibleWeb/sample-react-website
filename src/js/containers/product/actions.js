import {
  SET_PRODUCT,
  SET_PRODUCT_SECTION,
  SET_ERROR,
  SET_LOADING
} from "./constants";
import { renderPage } from "../page/actions";
import Api from "../../../../service/main";

const loadProducts = data => ({
  type: SET_PRODUCT,
  data
});

const loadProductsSection = data => ({
  type: SET_PRODUCT_SECTION,
  data
});

const setError = data => ({
  type: SET_ERROR,
  data
});

const isLoading = data => ({
  type: SET_LOADING,
  data
});

const getProducts = data => dispatch =>
  Api.products
    .getPage(data)
    .then(response => {
      dispatch(loadProducts(response));
      return response;
    })
    .catch(error => {
      throw error;
    });

export const fetchProductsSection = data => dispatch => {
  dispatch(isLoading(true));
  Api.products
    .getPage(data)
    .then(response => {
      dispatch(loadProductsSection(response));
      return response;
    })
    .then(response => {
      dispatch(isLoading(false));
      return response;
    })
    .catch(error => {
      dispatch(isLoading(false));
      dispatch(setError(true));
    });
};

export const fetchProducts = data => dispatch =>
  renderPage({ get: getProducts, data })(dispatch);
