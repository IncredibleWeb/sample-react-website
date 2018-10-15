import ApiService from "iw-service/service";

export default class QuickLinksService extends ApiService {
  getServiceUrl() {
    return `${super.getServiceUrl()}/quickLinks`;
  }
}
