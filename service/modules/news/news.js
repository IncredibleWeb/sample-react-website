import MockService from "./news.service.mock";
import {
  toNewsPage,
  toNewsCategoryPage,
  toNewsDetailPage
} from "./news.adapter";

export default class News {
  constructor({ service }) {
    this.service = service || new MockService();
  }

  getNewsPage(data) {
    return this.service
      .getPage({ data })
      .then(response => {
        return toNewsPage(response);
      })
      .catch(error => {
        console.error(error);
      });
  }

  getNewsDetailPage(data) {
    return this.service
      .getNewsDetailPage({ data })
      .then(response => {
        return toNewsDetailPage(response);
      })
      .catch(error => {
        console.error(error);
      });
  }

  getNewsCategoryPage(data) {
    return this.service
      .getNewsCategoryPage({ data })
      .then(response => {
        return toNewsCategoryPage(response);
      })
      .catch(error => {
        console.error(error);
      });
  }
}
