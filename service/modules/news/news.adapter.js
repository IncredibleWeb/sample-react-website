import moment from "moment";

import { toPage, toPageStub } from "iw-service/pages/pages.adapter";
import { toBanner } from "iw-service/adapter";
import { toPagination } from "iw-service/adapter";

export const toNewsPage = data => {
  let news = toNewsCategoryPage(data);
  news.secondaryBanner = toBanner(data.banners[0]);
  news.newsList = toNewsStubArray(data.newsItems);
  news.pagination = toPagination(data.pagination);
  news.categoriesCount = data.categoriesCount;
  return news;
};

export const toNewsCategoryPage = data => {
  let news = toPage(data);
  news.newsList = toNewsCategoryStubArray(data.newsItems);
  news.pagination = toPagination(data.pagination);
  return news;
};

const toNewsItem = data => {
  if (data) {
    let news = toPageStub(data);
    news.date = moment(data.date).format("MMMM DD, YYYY");
    news.categoryPage = toPage(data.categoryPage);
    return news;
  }
};

const toNewsStubArray = data => {
  if (data && data.length) {
    return data.map(item => {
      return toNewsItem(item);
    });
  }
  return [];
};

const toNewsCategoryItem = data => {
  if (data) {
    let news = toPageStub(data);
    news.date = moment(data.date).format("MMMM DD, YYYY");
    return news;
  }
};

const toNewsCategoryStubArray = data => {
  if (data && data.length) {
    return data.map(item => {
      return toNewsItem(item);
    });
  }
  return [];
};

export const toNewsDetailPage = data => {
  if (data) {
    let newsItem = toPage(data);
    newsItem.date = moment(data.date).format("MMMM DD, YYYY");
    return newsItem;
  }
};
