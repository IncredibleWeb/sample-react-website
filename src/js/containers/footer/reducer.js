import { fromJS } from "immutable";

import {
  SET_CREDITS,
  SET_QUICKLINKS,
  SET_SOCIAL,
  SET_FOOTER,
  REDUCER_NAME
} from "./constants";

const initialState = fromJS({
  quickLinks: [],
  email: "",
  social: [],
  footer: {}
});

export function footerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CREDITS:
      return state.set("credits", action.data.credits);
    case SET_QUICKLINKS:
      return state.set("quickLinks", action.data);
    case SET_SOCIAL:
      return state.set("social", action.data);
    case SET_FOOTER:
      return state.set("footer", {
        summary: action.data.summary,
        icon: action.data.icon
      });
    default:
      return state;
  }
}

export const getFooterState = state => {
  if (state.get(REDUCER_NAME)) {
    return state.get(REDUCER_NAME);
  } else {
    return initialState;
  }
};
