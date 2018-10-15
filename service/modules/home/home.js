import MockService from "./home.service.mock";
import { toHome } from "./home.adapter";

export default class Home {
  constructor({ service }) {
    this.service = service || new MockService();
  }

  getPage(data) {
    return this.service
      .getPage({ data })
      .then(response => {
        return toHome(response);
      })
      .catch(error => {
        console.error(error);
      });
  }
}
