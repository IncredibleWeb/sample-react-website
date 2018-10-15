import React from "react";
import PropTypes from "prop-types";

import ResponsiveImage from "../banner/responsiveImage";

const Thumbnail = ({ image, className, ...props }) => {
  if (image) {
    const { src, alt, title, srcset } = image;
    return (
      <div className={`thumb ${className ? className : ""}`}>
        <ResponsiveImage
          src={src}
          alt={alt}
          title={title}
          srcset={srcset}
          {...props}
        />
      </div>
    );
  }
  return null;
};

Thumbnail.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string
  })
};

export default Thumbnail;
