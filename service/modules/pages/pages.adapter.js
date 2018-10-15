import { toMeta, toImage, toView, toBanner, toVideo } from "../adapter";

export const toPageStub = data => {
  if (data) {
    return {
      id: data.id,
      name: data.name,
      title: data.title,
      summary: data.summary,
      url: data.url,
      thumbnail: toImage(data.thumbnail)
    };
  }
};

export const toPage = data => {
  if (data) {
    return {
      id: data.id,
      name: data.name,
      title: data.title,
      summary: data.summary,
      html: data.html,
      url: data.url,
      isHidden: data.isHidden,
      meta: toMeta(data.meta),
      thumbnail: toImage(data.thumbnail),
      view: toView(data),
      banners: toBannersArray(data.banners),
      icon: toImage(data.icon),
      children: toPageArray(data.children)
    };
  }
};

export const toPageArray = data => {
  if (data && data.length) {
    return data.map(item => {
      return toPage(item);
    });
  }
  return [];
};

export const toPageStubArray = data => {
  if (data && data.length) {
    return data.map(item => {
      return toPageStub(item);
    });
  }
  return [];
};

const toBannersArray = data => {
  if (data && data.length) {
    return data.map(item => {
      return toMultipleBannerItem(item);
    });
  }
  return [];
};

const toMultipleBannerItem = data => {
  if (data) {
    return toBanner(data);
  }
};
