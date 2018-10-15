import { toPage } from "iw-service/pages/pages.adapter";

export const toHome = data => {
  if (data) {
    let home = toPage(data);
    home.contentSection = toPage(data.contentSection);
    return home;
  }
};

export const toOurOffice = data => {
  if (data) {
    return toPage(data);
  }
};

export const toOfficeAddress = data => {
  if (data) {
    return {
      city: data.city,
      fullAddress: data.fullAddress
    };
  }
};

export const toOfficeContact = data => {
  if (data) {
    return {
      phoneFirst: data.phoneFirst,
      phoneSecond: data.phoneSecond
    };
  }
};
