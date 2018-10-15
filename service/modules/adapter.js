import { BASE_URL, URL_REGEX } from "./constants";

export const toView = data => {
  if (data) {
    return data.template ? data.template.toLowerCase() : "";
  }
};

export const toMeta = data => {
  if (data) {
    return {
      title: data.title,
      description: data.description,
      keywords: data.keywords,
      creator: data.creator,
      date: data.date
    };
  }
};

export const toImage = data => {
  if (data) {
    return {
      title: data.title,
      src: data.imageUrl,
      alt: data.alternateText,
      width: data.width,
      height: data.height
    };
  }
};

export const toVideo = data => {
  if (data) {
    return {
      title: data.title,
      src: data.videoUrl
    };
  }
};

export const toImageArray = data => {
  if (data && data.length) {
    return data.map(item => {
      return toImage(item);
    });
  }
  return [];
};

export const toResponsiveImage = images => {
  if (images && images.length > 0) {
    const defaultImage = images[0];
    let responsiveImageData = {
      title: defaultImage.title,
      src: defaultImage.imageUrl,
      alt: defaultImage.alternateText,
      srcset: defaultImage.imageUrl + " " + defaultImage.width + "w"
    };
    // If there any images left over, append their contents to the srcset
    for (let i = 1; i < images.length; i++) {
      responsiveImageData.srcset = `${responsiveImageData.srcset}, ${
        images[i].imageUrl
      } ${images[i].width}w`;
    }
    return responsiveImageData;
  }
};

export const toBanner = data => {
  if (data) {
    let banner = {
      id: data.id,
      title: data.title,
      summary: data.summary,
      link: data.link,
      ctaText: data.ctaText,
      textColor: data.textColor,
      images: toResponsiveImage(data.images)
    };

    if (data.videoWebM) {
      banner.videoWebM = toVideo(data.videoWebM);
      banner.useVideo = true;
    }
    if (data.videoMp4) {
      banner.videoMp4 = toVideo(data.videoMp4);
      banner.useVideo = true;
    }

    return banner;
  }
};

export const toPagination = data => {
  if (data) {
    return {
      pageCount: data.pageCount,
      itemCount: data.itemCount
    };
  }
};

export const toLink = data => {
  if (data) {
    return {
      title: data.title,
      url: data.url,
      isNewWindow: data.isNewWindow,
      isInternal: data.isInternal
    };
  }
};

export const toLinkArray = data => {
  if (data) {
    return data.map(item => {
      return toLink(item);
    });
  }
  return [];
};
