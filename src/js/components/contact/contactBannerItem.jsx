import React from "react";
import PropTypes from "prop-types";

const ContactBannerItem = ({ item, className, ...props }) => {
  return (
    <div className={`contact-banner-item ${className ? className : ""}`}>
      <div className="icon">
        <div className="icon-img" />
      </div>
      <div className="banner-content">
        <div className="title">{item.title}</div>
        <div className="text">{item.text}</div>
      </div>
    </div>
  );
};

ContactBannerItem.propTypes = {
  items: PropTypes.object
};

export default ContactBannerItem;
