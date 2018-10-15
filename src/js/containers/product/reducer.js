import { fromJS } from "immutable";

import {
  SET_PRODUCT,
  SET_PRODUCT_SECTION,
  SET_ERROR,
  SET_LOADING,
  REDUCER_NAME
} from "./constants";

const initialState = fromJS({
  products: {}
});

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT:
      return state.set("products", action.data);
    case SET_PRODUCT_SECTION:
      return state.set("productSection", action.data);
    case SET_LOADING:
      return state.set("isLoading", action.data);
    case SET_ERROR:
      return state.set("isError", action.data);
    default:
      return state;
  }
};

export const getProductsState = state => {
  if (state.get(REDUCER_NAME)) {
    return state.get(REDUCER_NAME);
  } else {
    return initialState;
  }
};
