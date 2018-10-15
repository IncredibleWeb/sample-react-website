import { toImage } from "../adapter";

export const toSocial = data => {
  if (data) {
    return {
      id: data.id,
      title: data.title,
      url: data.url,
      platform: data.platform
    };
  }
};

export const toSocialArray = data => {
  if (data && data.length) {
    return data.map(item => {
      return toSocial(item);
    });
  }
  return [];
};
