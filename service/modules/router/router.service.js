import ApiService from "iw-service/service";

export default class RouterService extends ApiService {
  getServiceUrl() {
    return `${super.getServiceUrl()}/routes`;
  }
}
