import { fromJS } from "immutable";

import {
  SET_VALIDATION_MESSAGES,
  SET_CONTACT_SECTION,
  SET_SUCCESS,
  SET_ERROR,
  SET_LOADING,
  REDUCER_NAME
} from "./constants";

const initialState = fromJS({
  messages: {},
  formValues: {},
  isSuccess: false,
  isLoading: true,
  isError: false,
  errorMessage: ""
});

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VALIDATION_MESSAGES:
      return state
        .set("messages", action.data.messages)
        .set("formValues", action.data.formValues);
    case SET_CONTACT_SECTION:
      return state.set("contactSection", action.data);
    case SET_SUCCESS:
      return state.set("isSuccess", true).set("isError", false);
    case SET_LOADING:
      return state.set("isLoading", action.data);
    case SET_ERROR:
      return state
        .set("isError", true)
        .set("errorMessage", action.data.errorMessage);
    default:
      return state;
  }
};

export const getContactState = state => {
  if (state.get(REDUCER_NAME)) {
    return state.get(REDUCER_NAME);
  } else {
    return initialState;
  }
};
