import MockService from "./navigation.service.mock";
import { toNavigation, toSitemap } from "./navigation.adapter";

export default class Navigation {
  constructor({ service }) {
    this.service = service || new MockService();
  }

  get(data) {
    return this.service.get({ data }).then(response => {
      return toNavigation(response);
    });
  }

  getSitemap(data) {
    return this.service.getSitemap({ data }).then(response => {
      return toSitemap(response);
    });
  }
}
