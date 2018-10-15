import ApiPageService from "iw-service/page.service";
import { DETAIL_PAGE_URL } from "iw-service/constants";

export default class HomeService extends ApiPageService {
  getServiceUrl() {
    return `${super.getServiceUrl()}/product`;
  }

  getProductsDetailPage({ id, data, url }) {
    const requestUrl = `${this.getServiceUrl()}${DETAIL_PAGE_URL}${data.url}`;
    return super.get({ data, url: requestUrl });
  }
}
