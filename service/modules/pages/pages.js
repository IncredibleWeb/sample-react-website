import MockService from "./pages.service.mock";
import { toPage } from "./pages.adapter";

export default class Page {
  constructor({ service }) {
    this.service = service || new MockService();
  }

  get(data) {
    return this.service.get({ data }).then(response => {
      return toPage(response);
    });
  }
}
