import ApiService from "iw-service/service";
import { AUTHOR_NAME, AUTHOR_URL } from "iw-service/constants";

export default class CreditsService extends ApiService {
  getServiceUrl() {
    return `${super.getServiceUrl()}/credits`;
  }

  get() {
    return Promise.resolve({
      credits: `<a href=${AUTHOR_URL}target="_blank" rel="noopener" title="Web Development">Website</a> by <a href=${AUTHOR_URL} target="_blank" rel="noopener" title="Web Development">${AUTHOR_NAME}</a>`
    });
  }
}
