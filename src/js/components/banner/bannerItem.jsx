import React from "react";
import PropTypes from "prop-types";

import ResponsiveImage from "./responsiveImage";

const BannerItem = ({ view, banner, className, ...props }) => {
  let contentBanner = null;

  let bannerImages = null;
  if (banner) {
    if (banner.images) {
      bannerImages = (
        <ResponsiveImage
          src={banner.images.src}
          srcset={banner.images.srcset}
          alt={banner.images.alt}
          title={banner.images.title}
        />
      );
    }

    if (view === "home") {
      contentBanner = (
        <div className={` ${className ? className : ""}`}>
          {banner.images && <div>{bannerImages}</div>}
        </div>
      );
    } else {
      contentBanner = (
        <div className={` ${className ? className : ""}`}>
          {banner.images && <div>{bannerImages}</div>}
        </div>
      );
    }
  }

  return <section>{contentBanner}</section>;
};

BannerItem.propTypes = {
  banner: PropTypes.object
};

export default BannerItem;
