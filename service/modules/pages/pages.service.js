import ApiPageService from "../page.service";

export default class PagesService extends ApiPageService {
  getServiceUrl() {
    return `${super.getServiceUrl()}/pages`;
  }
}
