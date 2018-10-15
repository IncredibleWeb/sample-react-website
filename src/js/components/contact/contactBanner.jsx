import React from "react";
import PropTypes from "prop-types";
import ContactBannerItem from "./contactBannerItem";

const ContactBanner = ({ items, className, ...props }) => {
  return (
    <div className={`contact-banner ${className ? className : ""}`}>
      <div className="contact-banner-container">
        <div className="wrapper">
          {items &&
            items.map((item, index) => {
              return <ContactBannerItem key={index} item={item} />;
            })}
        </div>
      </div>
    </div>
  );
};

ContactBanner.propTypes = {
  items: PropTypes.array
};

export default ContactBanner;
