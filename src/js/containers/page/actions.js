import { SET_PAGE, CLEAR_BANNER, RESET_SCROLL } from "./constants";
import { isLoading, isError, setMeta, setUrl } from "../app/actions";
import Api from "../../../../service/main";

const clearBanner = data => ({
  type: CLEAR_BANNER
});

const resetScroll = data => ({
  type: RESET_SCROLL
});

const loadPage = data => ({
  type: SET_PAGE,
  data
});

const getPage = data => dispatch =>
  Api.pages
    .get(data)
    .then(response => {
      dispatch(loadPage(response));
      return response;
    })
    .catch(error => {
      throw error;
    });

export const renderPage = ({ get, data }) => dispatch => {
  dispatch(isLoading(true));
  dispatch(isError(false));
  dispatch(clearBanner());
  dispatch(resetScroll());
  dispatch(setUrl(data.url));

  return get(data)(dispatch)
    .then(response => {
      dispatch(loadPage(response));
      dispatch(setMeta(response.meta));
      dispatch(isLoading(false));
      return response;
    })
    .catch(error => {
      dispatch(isLoading(false));
      dispatch(isError(true));
      console.error(error);
      throw error;
    });
};

export const fetchPage = data => dispatch => {
  return renderPage({ get: getPage, data })(dispatch);
};
