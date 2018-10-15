import { fromJS } from "immutable";

import { SET_NEWS_DETAIL, REDUCER_NAME } from "./constants";

const initialState = fromJS({
  newsDetail: {}
});

export const newsDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS_DETAIL:
      return state.set("newsDetail", action.data);
    default:
      return state;
  }
};

export const getNewsDetailState = state => {
  if (state.get(REDUCER_NAME)) {
    return state.get(REDUCER_NAME);
  } else {
    return initialState;
  }
};
