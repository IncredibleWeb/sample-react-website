import ApiService from "iw-service/service";

export default class NavigationService extends ApiService {
  getServiceUrl() {
    return `${super.getServiceUrl()}/navigation`;
  }

  getSitemap({ url }) {
    return super.get({ url: `${this.getServiceUrl()}/sitemap` });
  }
}
