import { SET_NAV_ITEM_ACTIVE, SET_HEADER } from "./constants";
import Api from "../../../../service/main";

export const setNavItemActive = data => {
  return {
    type: SET_NAV_ITEM_ACTIVE,
    data
  };
};

const loadHeader = data => {
  return {
    type: SET_HEADER,
    data
  };
};

export const fetchHeader = data => dispatch =>
  Api.navigation
    .get(data)
    .then(response => {
      dispatch(loadHeader(response));
      return response;
    })
    .catch(error => {
      throw error;
    });
