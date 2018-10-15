import { fromJS } from "immutable";

import {
  SET_PAGE,
  CLEAR_BANNER,
  RESET_SCROLL,
  REDUCER_NAME
} from "./constants";

const initialState = fromJS({
  id: 0,
  title: "",
  html: "",
  url: "",
  thumbnail: "",
  view: "",
  banners: [],
  children: [],
  resetScroll: false
});

export const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE:
      return state
        .set("id", action.data.id)
        .set("title", action.data.title)
        .set("summary", action.data.summary)
        .set("html", action.data.html)
        .set("url", action.data.url)
        .set("thumbnail", action.data.thumbnail)
        .set("view", action.data.view)
        .set("banners", action.data.banners)
        .set("children", action.data.children);
    case CLEAR_BANNER:
      return state.set("banners", []);
    case RESET_SCROLL:
      return state.set("resetScroll", true);
    default:
      return state;
  }
};

export const getPageState = state => {
  if (state.get(REDUCER_NAME)) {
    return state.get(REDUCER_NAME);
  } else {
    return initialState;
  }
};
