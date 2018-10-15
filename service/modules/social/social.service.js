import ApiService from "iw-service/service";

export default class SocialService extends ApiService {
  getServiceUrl() {
    return `${super.getServiceUrl()}/socialLinks`;
  }
}
