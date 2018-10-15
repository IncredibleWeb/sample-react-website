import { BASE_URL } from "../constants";

export const toNavigation = data => {
  if (data) {
    let response = {};
    response.id = data.id;
    response.name = data.name;
    response.title = data.title;
    response.icon = data.icon ? `${BASE_URL}${data.icon.imageUrl}` : null;
    response.url = data.url;
    response.isActive = data.isActive || false;
    response.children = [];
    if (data.children && data.children.length > 0) {
      // Using forEach instead of the faster for loop to avoid ordering the navigation
      // menu backwards
      data.children.forEach(child => {
        response.children.push(toNavigation(child));
      });
      for (let i = data.children.length - 1; i >= 0; i--) {}
    }
    return response;
  }
};

export const toSitemapItem = data => {
  if (data) {
    return {
      url: data.url,
      lastEdited: data.lastEdited
    };
  }
};

export const toSitemap = data => {
  let sitemapItems = [];
  if (data) {
    sitemapItems.push(toSitemapItem(data));
    if (data.children) {
      data.children.forEach(
        n => (sitemapItems = sitemapItems.concat(toSitemap(n)))
      );
    }
  }
  return sitemapItems;
};
