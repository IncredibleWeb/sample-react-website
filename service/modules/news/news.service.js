import ApiPageService from "iw-service/page.service";
import { DETAIL_PAGE_URL } from "iw-service/constants";

export default class NewsService extends ApiPageService {
  getServiceUrl() {
    return `${super.getServiceUrl()}/news`;
  }

  getNewsDetailPage({ id, data, url }) {
    const requestUrl = `${this.getServiceUrl()}${DETAIL_PAGE_URL}${data.url}`;
    return super.get({ data, url: requestUrl });
  }

  getNewsCategoryPage({ id, data, url }) {
    const requestUrl = `${this.getServiceUrl()}/getCategoryPage`;
    return super.get({ data, url: requestUrl });
  }
}
