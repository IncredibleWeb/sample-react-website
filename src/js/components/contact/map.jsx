import React from "react";
import PropTypes from "prop-types";

const Map = ({
  src,
  width,
  height,
  title,
  frameBorder,
  className,
  ...props
}) => {
  return (
    <div className={`map ${className ? className : ""}`}>
      <iframe
        src={src}
        width={width}
        height={height}
        title={title}
        frameBorder={frameBorder}
        allowFullScreen
      />
    </div>
  );
};

Map.propTypes = {
  src: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  title: PropTypes.string,
  frameBorder: PropTypes.string
};

export default Map;
