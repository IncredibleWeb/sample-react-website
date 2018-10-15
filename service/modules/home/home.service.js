import ApiPageService from "iw-service/page.service";

export default class HomeService extends ApiPageService {
  getServiceUrl() {
    return `${super.getServiceUrl()}/home`;
  }
}
