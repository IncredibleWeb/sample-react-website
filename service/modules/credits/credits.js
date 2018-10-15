import MockService from "./credits.service.mock";
import { toCredits } from "./credits.adapter";

export default class Credits {
  constructor({ service }) {
    this.service = service || new MockService();
  }

  get(data) {
    return this.service.get({ data }).then(response => toCredits(response));
  }
}
