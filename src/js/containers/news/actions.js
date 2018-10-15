import {
  SET_NEWS,
  SET_CATEGORY_NEWS,
  SET_PAGINATION,
  SET_MORE_NEWS,
  SET_MORE_CATEGORY_NEWS,
  SET_NEWS_SECTION,
  SET_ERROR,
  SET_LOADING
} from "./constants";
import { renderPage } from "../page/actions";
import Api from "../../../../service/main";

const loadNews = data => ({
  type: SET_NEWS,
  data
});

const loadCategoryNews = data => ({
  type: SET_CATEGORY_NEWS,
  data
});

const loadMoreNews = data => ({
  type: SET_MORE_NEWS,
  data
});

const loadMoreCategoryNews = data => ({
  type: SET_MORE_CATEGORY_NEWS,
  data
});

const setPagination = data => ({
  type: SET_PAGINATION,
  data
});

const loadNewsSection = data => ({
  type: SET_NEWS_SECTION,
  data
});

const setError = data => ({
  type: SET_ERROR,
  data
});

const isLoading = data => ({
  type: SET_LOADING,
  data
});

export const fetchNewsSection = data => dispatch => {
  dispatch(isLoading(true));
  Api.news
    .getNewsPage(data)
    .then(response => {
      dispatch(loadNewsSection(response));
      return response;
    })
    .then(response => {
      dispatch(isLoading(false));
      return response;
    })
    .catch(error => {
      dispatch(isLoading(false));
      dispatch(setError(true));
    });
};

export const getNews = data => dispatch =>
  Api.news
    .getNewsPage(data)
    .then(response => {
      dispatch(loadNews(response));
      dispatch(setPagination({ ...response.pagination, ...data }));
      return response;
    })
    .catch(error => {
      throw error;
    });

export const fetchMoreNews = data => dispatch =>
  Api.news
    .getNewsPage(data)
    .then(response => {
      dispatch(loadMoreNews(response));
      dispatch(setPagination({ ...response.pagination, ...data }));
      return response;
    })
    .catch(error => {
      throw error;
    });

export const getCategoryNews = data => dispatch =>
  Api.news
    .getNewsCategoryPage(data)
    .then(response => {
      dispatch(loadCategoryNews(response));
      dispatch(setPagination({ ...response.pagination, ...data }));
      return response;
    })
    .catch(error => {
      throw error;
    });

export const fetchMoreNewsCategory = data => dispatch =>
  Api.news
    .getNewsCategoryPage(data)
    .then(response => {
      dispatch(loadMoreCategoryNews(response));
      dispatch(setPagination({ ...response.pagination, ...data }));
      return response;
    })
    .catch(error => {
      throw error;
    });

export const fetchNews = data => dispatch =>
  renderPage({ get: getNews, data })(dispatch);

export const fetchNewsCategory = data => dispatch =>
  renderPage({ get: getCategoryNews, data })(dispatch);
