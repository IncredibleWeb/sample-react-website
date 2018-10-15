import React from "react";
import PropTypes from "prop-types";
import NavTreeItem from "./navTreeItem";

const NavTree = ({ nav, onLinkClick }) => {
  let children = [];
  const iconArrow = "/img/icons/ic_arrow.svg";

  if (nav.children) {
    children = nav.children.map((item, index) => {
      return (
        <li
          className={`item ${item.children.length > 0 ? "two-tier" : ""} `}
          key={index}
        >
          <div
            className={`${item.children.length > 0 ? "two-tier-mobile" : ""}`}
            onClick={e => {
              e.target.nextElementSibling.nextElementSibling.classList.toggle(
                "two-tier-item"
              );
            }}
          />
          <NavTreeItem
            name={item.name}
            url={item.url}
            icon={item.children.length > 0 ? iconArrow : item.icon}
            children={item.children}
            isActive={item.isActive}
            onClick={onLinkClick}
          />
          <div>
            {item.children.length > 0 && (
              <div className="two-tier-content">
                <ul>
                  {item.children.map((n, i) => (
                    <li key={i}>
                      <NavTreeItem
                        name={n.name}
                        url={n.url}
                        icon={n.icon}
                        isActive={n.isActive}
                        onClick={onLinkClick}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </li>
      );
    });
  }

  return (
    <ul className="page-list">
      <li className="item">
        <NavTreeItem
          name="Home"
          url={nav.url}
          icon={nav.icon}
          isActive={nav.isActive}
          onClick={onLinkClick}
        />
      </li>
      {children}
    </ul>
  );
};

NavTree.propTypes = {
  nav: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    icon: PropTypes.string,
    isActive: PropTypes.bool.isRequired,
    children: PropTypes.array.isRequired
  }).isRequired
};

export default NavTree;
