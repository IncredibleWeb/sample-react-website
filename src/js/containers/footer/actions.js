import {
  SET_CREDITS,
  SET_QUICKLINKS,
  SET_SOCIAL,
  SET_FOOTER
} from "./constants";

import Api from "../../../../service/main";

const setCredits = data => ({
  type: SET_CREDITS,
  data
});

const setSocial = data => ({
  type: SET_SOCIAL,
  data
});

const setQuickLinks = data => ({
  type: SET_QUICKLINKS,
  data
});

const setFooter = data => ({
  type: SET_FOOTER,
  data
});

export const fetchCredits = data => dispatch =>
  Api.credits
    .get()
    .then(response => {
      dispatch(setCredits(response));
      return response;
    })
    .catch(error => {
      throw error;
    });

export const fetchQuickLinks = data => dispatch =>
  Api.quickLinks
    .get()
    .then(response => {
      dispatch(setQuickLinks(response));
      return response;
    })
    .catch(error => {
      throw error;
    });

export const fetchSocial = data => dispatch =>
  Api.social
    .get()
    .then(response => {
      dispatch(setSocial(response));
      return response;
    })
    .catch(error => {
      throw error;
    });

export const fetchFooter = data => dispatch =>
  Api.home
    .getPage()
    .then(response => {
      dispatch(setFooter(response));
      return response;
    })
    .catch(error => {
      throw error;
    });
