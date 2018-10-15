import React from "react";
import PropTypes from "prop-types";

const ResponsiveImage = ({ src, srcset, alt, title, ...props }) => (
  <img src={src} srcSet={srcset} alt={alt} title={title} {...props} />
);

ResponsiveImage.propTypes = {
  src: PropTypes.string,
  srcset: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string
};

export default ResponsiveImage;
