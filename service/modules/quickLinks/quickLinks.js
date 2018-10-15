import MockService from "./quickLinks.service.mock";
import { toQuickLinkArray } from "./quickLinks.adapter";

export default class QuickLinks {
  constructor({ service }) {
    this.service = service || new MockService();
  }

  get(data) {
    return this.service
      .get({ data })
      .then(response => toQuickLinkArray(response));
  }
}
