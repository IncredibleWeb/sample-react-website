import MockService from "./social.service.mock";
import { toSocialArray } from "./social.adapter";

export default class Social {
  constructor({ service }) {
    this.service = service || new MockService();
  }

  get(data) {
    return this.service.get({ data }).then(response => toSocialArray(response));
  }
}
