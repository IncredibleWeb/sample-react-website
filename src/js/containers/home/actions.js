import { SET_HOME } from "./constants";
import { renderPage } from "../page/actions";
import Api from "../../../../service/main";

const loadHome = data => ({
  type: SET_HOME,
  data
});

const getHome = data => dispatch =>
  Api.home
    .getPage(data)
    .then(response => {
      dispatch(loadHome(response));
      return response;
    })
    .catch(error => {
      throw error;
    });

export const fetchHome = data => dispatch =>
  renderPage({ get: getHome, data })(dispatch);
