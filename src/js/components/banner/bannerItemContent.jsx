import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import ContactDetail from "../contact/contactBanner";

const BannerItemContent = ({ view, data, className, ...props }) => {
  let contentSummary = null;
  if (view === "contact") {
    contentSummary = <ContactDetail items={data.items} />;
  } else {
    contentSummary = (
      <div>
        <div
          className="multiple-banner-content-text multiple-banner-summary"
          dangerouslySetInnerHTML={{ __html: data.summary }}
        />
        {data.link && (
          <Link
            to={data.link}
            href={data.link}
            className="button multiple-banner-button"
            title={data.title}
          >
            {data.ctaText}
          </Link>
        )}
      </div>
    );
  }

  return (
    <div className="multiple-banner-content slide-text">
      <span className="multiple-banner-content-text multiple-banner-title">
        {data.title}
      </span>
      {contentSummary}
    </div>
  );
};

BannerItemContent.propTypes = {
  data: PropTypes.object
};

export default BannerItemContent;
