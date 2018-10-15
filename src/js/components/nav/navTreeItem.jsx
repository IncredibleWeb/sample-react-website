import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavTreeItem = ({ url, name, icon, children, isActive, onClick }) => {
  const className = isActive ? "selected" : "";
  return (
    <div>
      <Link to={url} title={name} className={className} onClick={onClick}>
        {name}
      </Link>
      {icon && (
        <i
          className={`icon ${
            children && children.length > 0 ? "two-tier-icon" : ""
          }`}
        >
          {icon && <img src={icon} alt={name} />}
        </i>
      )}
    </div>
  );
};

NavTreeItem.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  icon: PropTypes.string,
  isActive: PropTypes.bool.isRequired
};

export default NavTreeItem;
