import { fromJS } from "immutable";

import {
  SET_NEWS,
  SET_CATEGORY_NEWS,
  SET_PAGINATION,
  SET_MORE_NEWS,
  SET_MORE_CATEGORY_NEWS,
  SET_NEWS_SECTION,
  SET_ERROR,
  SET_LOADING,
  REDUCER_NAME
} from "./constants";

const initialState = fromJS({
  news: {},
  categoryNews: {},
  pagination: {}
});

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS:
      return state.set("news", action.data);
    case SET_CATEGORY_NEWS:
      return state.set("categoryNews", action.data);
    case SET_PAGINATION:
      return state.set("pagination", action.data);
    case SET_MORE_NEWS:
      action.data.newsList = [
        ...state.get("news").newsList,
        ...action.data.newsList
      ];
      return state.set("news", action.data);
    case SET_MORE_CATEGORY_NEWS:
      action.data.newsList = [
        ...state.get("categoryNews").newsList,
        ...action.data.newsList
      ];
      return state.set("categoryNews", action.data);
    case SET_NEWS_SECTION:
      return state.set("newsSection", action.data);
    case SET_LOADING:
      return state.set("isLoading", action.data);
    case SET_ERROR:
      return state.set("isError", action.data);
    default:
      return state;
  }
};

export const getNewsState = state => {
  if (state.get(REDUCER_NAME)) {
    return state.get(REDUCER_NAME);
  } else {
    return initialState;
  }
};
