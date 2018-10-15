import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Thumbnail from "../page/thumbnail";

const Card = ({
  title,
  html,
  thumbnail,
  buttons,
  onCloseClick,
  closeUrl,
  className,
  children,
  ...props
}) => {
  return (
    <section className={`card ${className ? className : ""}`} {...props}>
      {title && (
        <div className="card-title">
          <h1>{title}</h1>
        </div>
      )}
      <div
        className={`card-content ${
          thumbnail ? "card-content--two-column" : ""
        }`}
      >
        {thumbnail && (
          <Thumbnail image={thumbnail} className="card-content__thumb" />
        )}
        {html && (
          <div
            className="card-content__richtext"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        )}
      </div>
      {buttons && (
        <div className="card-buttons">
          {buttons.map((n, index) => {
            if (n.isInternal) {
              return (
                <Link
                  to={n.url}
                  key={index}
                  href={n.url}
                  className="card-buttons__button"
                  title={n.title}
                  onClick={onCloseClick}
                >
                  {n.title}
                </Link>
              );
            } else {
              return (
                <a
                  href={n.url}
                  key={index}
                  target={n.isNewWindow ? "_blank" : ""}
                  className="card-buttons__button"
                  onClick={onCloseClick}
                >
                  {n.title}
                </a>
              );
            }
          })}
        </div>
      )}
      {closeUrl && (
        <div className="card-close">
          <Link
            to={closeUrl}
            className="card-close__button"
            onClick={e => {
              e.preventDefault();
              onCloseClick(e);
            }}
          />
        </div>
      )}
      {children}
    </section>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  html: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string
  }),
  buttons: PropTypes.array,
  closeUrl: PropTypes.string,
  onCloseClick: PropTypes.func
};

export default Card;
