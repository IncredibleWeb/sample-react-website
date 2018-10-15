import { toPage } from "iw-service/pages/pages.adapter";
import { toBanner } from "iw-service/adapter";

export const toContactUsJson = data => {
  if (data) {
    return {
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      message: data.message
    };
  }
};

export const toContactPage = data => {
  if (data) {
    let contact = toPage(data);
    contact.banners = toContactBanners(data.banners, data.items);
    contact.items = toContactItems(data.items);
    return contact;
  }
};

const toContactItems = data => {
  if (data && data.length) {
    return data.map(item => {
      return toContactItem(item);
    });
  }
  return [];
};

const toContactItem = data => {
  if (data) {
    return {
      id: data.id,
      title: data.title,
      text: data.text
    };
  }
};

const toContactBanners = (data, contactItems) => {
  if (data && data.length) {
    return data.map(item => {
      return toContactBannerItem(item, contactItems);
    });
  }
  return [];
};

const toContactBannerItem = (data, contactItems) => {
  if (data) {
    let banner = toBanner(data);
    banner.items = toContactItems(contactItems);
    return banner;
  }
};
