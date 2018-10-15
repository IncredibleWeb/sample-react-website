import MockService from "./products.service.mock";
import { toProductsPage, toProductsDetailPage } from "./products.adapter";

export default class Home {
  constructor({ service }) {
    this.service = service || new MockService();
  }

  getPage(data) {
    return this.service
      .getPage({ data })
      .then(response => {
        return toProductsPage(response);
      })
      .catch(error => {
        console.error(error);
      });
  }

  getProductsDetailPage(data) {
    return this.service
      .getProductsDetailPage({ data })
      .then(response => {
        return toProductsDetailPage(response);
      })
      .catch(error => {
        console.error(error);
      });
  }
}
