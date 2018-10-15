import { fromJS } from "immutable";

import { SET_PRODUCT_DETAIL, REDUCER_NAME } from "./constants";

const initialState = fromJS({
  productDetail: null
});

export const productDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT_DETAIL:
      return state.set("productDetail", action.data);
    default:
      return state;
  }
};

export const getProductsDetailState = state => {
  if (state.get(REDUCER_NAME)) {
    return state.get(REDUCER_NAME);
  } else {
    return initialState;
  }
};
