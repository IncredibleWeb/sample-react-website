import { toPage } from "iw-service/pages/pages.adapter";

export const toProductsPage = data => {
  if (data) {
    return toPage(data);
  }
};

export const toProductsDetailPage = data => {
  if (data) {
    return toPage(data);
  }
};
