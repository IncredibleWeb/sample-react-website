import { SET_NEWS_DETAIL } from "./constants";
import { renderPage } from "../page/actions";
import Api from "../../../../service/main";

const loadNewsDetail = data => ({
  type: SET_NEWS_DETAIL,
  data
});

export const getNewsDetail = data => dispatch =>
  Api.news
    .getNewsDetailPage(data)
    .then(response => {
      dispatch(loadNewsDetail(response));
      return response;
    })
    .catch(error => {
      throw error;
    });

export const fetchNewsDetail = data => dispatch =>
  renderPage({ get: getNewsDetail, data })(dispatch);
