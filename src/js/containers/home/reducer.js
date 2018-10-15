import { fromJS } from "immutable";

import { SET_HOME, REDUCER_NAME } from "./constants";

const initialState = fromJS({
  home: {
    contentSection: null
  }
});

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HOME:
      return state
        .set("home", action.data)
        .set("contentSection", action.data.contentSection);
    default:
      return state;
  }
};

export const getHomeState = state => {
  if (state.get(REDUCER_NAME)) {
    return state.get(REDUCER_NAME);
  } else {
    return initialState;
  }
};
