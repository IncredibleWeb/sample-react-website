import React from "react";
import PropTypes from "prop-types";

const Social = ({ links }) => {
  if (links) {
    return (
      <ul className="social-links">
        {links.map(n => (
          <li key={n.id} className="social-links-item">
            <a
              href={n.url}
              target="_blank"
              rel="noopener"
              className={
                "social-links-item__link " +
                n.platform.toLowerCase().replace(/\s/, "-")
              }
            >
              {n.title}
            </a>
          </li>
        ))}
      </ul>
    );
  }
  return null;
};

Social.propTypes = {
  links: PropTypes.array
};

export default Social;
